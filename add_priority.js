const fs = require('fs');
const path = require('path');

function processFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let originalContent = content;

	// Add priority attribute to <Image if not already there
	if (/<Image\s/g.test(content)) {
		content = content.replace(/<Image\s/g, '<Image priority ');

		if (originalContent !== content) {
			fs.writeFileSync(filePath, content, 'utf8');
			console.log(`Updated priority in ${filePath}`);
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
console.log('Done adding priority.');
