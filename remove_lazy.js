const fs = require('fs');
const path = require('path');

function processFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let originalContent = content;

	// Remove loading="lazy" if <Image priority exists
	if (content.includes('<Image priority')) {
		content = content.replace(/loading="lazy"/g, '');
		content = content.replace(/loading='lazy'/g, '');

		if (originalContent !== content) {
			fs.writeFileSync(filePath, content, 'utf8');
			console.log(`Removed lazy from ${filePath}`);
		}
	}
}

function walk(dir) {
	let results = [];
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
		let fullPath = path.join(dir, file);
		const stat = fs.statSync(fullPath);
		if (stat && stat.isDirectory()) {
			results = results.concat(walk(fullPath));
		} else {
			if ((fullPath.includes('Hero') || fullPath.includes('hero')) && (file.endsWith('.js') || file.endsWith('.jsx'))) {
				results.push(fullPath);
			}
		}
	});
	return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(processFile);
console.log('Done removing lazy.');
