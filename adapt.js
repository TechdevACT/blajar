const fs = require('fs');
const path = require('path');

function replaceLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace import { Link } from "@tanstack/react-router"
    content = content.replace(/import\s+\{([^}]*?)Link([^}]*?)\}\s+from\s+['"]@tanstack\/react-router['"];?/, 'import Link from "next/link";');
    
    // Replace <Link to="..." with <Link href="..."
    content = content.replace(/<Link([^>]*?)\bto=(['"])(.*?)\2/g, '<Link$1href=$2$3$2');

    fs.writeFileSync(filePath, content);
}

const files = [
    path.join(__dirname, 'src/components/SiteNav.tsx'),
    path.join(__dirname, 'src/components/SiteFooter.tsx'),
];

files.forEach(f => {
    if (fs.existsSync(f)) {
        replaceLinks(f);
        console.log('Adapted', f);
    }
});

// For index.tsx -> page.tsx
const indexSrc = path.join(__dirname, 'blajar-lovable/src/routes/index.tsx');
let indexContent = fs.readFileSync(indexSrc, 'utf-8');
// remove createFileRoute and Route export
indexContent = indexContent.replace(/import\s+\{\s*createFileRoute.*\}\s+from\s+['"]@tanstack\/react-router['"];?/, 'import Link from "next/link";');
indexContent = indexContent.replace(/export\s+const\s+Route\s*=\s*createFileRoute\([^)]+\)\(\{[\s\S]*?\}\);\s*/, '');
// replace to= with href=
indexContent = indexContent.replace(/<Link([^>]*?)\bto=(['"])(.*?)\2/g, '<Link$1href=$2$3$2');
// make HomePage the default export
indexContent = indexContent.replace(/function\s+HomePage\(\)\s*\{/, 'export default function HomePage() {');

fs.writeFileSync(path.join(__dirname, 'src/app/page.tsx'), indexContent);
console.log('Adapted index.tsx to page.tsx');
