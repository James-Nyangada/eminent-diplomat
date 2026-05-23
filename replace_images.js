const fs = require('fs');
const path = require('path');

function processFile(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let originalContent = content;

	// Check if the file contains an <img> tag
	if (/<img\s/g.test(content)) {
		// Replace <img ... /> with <Image ... />
		content = content.replace(/<img\s+([\s\S]*?)\/?>/g, (match, attrs) => {
			// Don't modify if it's already an <Image> tag (though regex is for <img)
			return `<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} ${attrs.trim()} />`;
		});

		// Add import Image from "next/image"; if not exists
		if (!content.includes('import Image from "next/image"')) {
			// Find the last import statement
			const importRegex = /import\s+.*?;/g;
			let lastMatch;
			let match;
			while ((match = importRegex.exec(content)) !== null) {
				lastMatch = match;
			}

			const importStmt = `import Image from "next/image";\n`;
			if (lastMatch) {
				content = content.substring(0, lastMatch.index + lastMatch[0].length) + '\n' + importStmt + content.substring(lastMatch.index + lastMatch[0].length);
			} else {
				// No imports found, add to top
				// Skip "use client"; if it exists
				if (content.startsWith('"use client";')) {
					content = '"use client";\n' + importStmt + content.substring(13);
				} else {
					content = importStmt + content;
				}
			}
		}

		if (originalContent !== content) {
			fs.writeFileSync(filePath, content, 'utf8');
			console.log(`Updated ${filePath}`);
		}
	}
}

function walk(dir) {
	let results = [];
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
		file = path.join(dir, file);
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			results = results.concat(walk(file));
		} else {
			if (file.endsWith('.js') || file.endsWith('.jsx')) {
				results.push(file);
			}
		}
	});
	return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(processFile);
console.log('Done replacing images.');
