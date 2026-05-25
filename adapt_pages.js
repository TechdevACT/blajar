const fs = require('fs');
const path = require('path');

function adaptPage(sourcePath, targetDir, isClient = false) {
    let content = fs.readFileSync(sourcePath, 'utf-8');
    
    // Remove tanstack router imports and add next/link if it has Link
    if (content.includes('Link ')) {
        content = content.replace(/import\s+\{.*\}\s+from\s+['"]@tanstack\/react-router['"];?/, 'import Link from "next/link";');
    } else {
        content = content.replace(/import\s+\{.*\}\s+from\s+['"]@tanstack\/react-router['"];?/, '');
    }
    
    // Remove Route definition
    content = content.replace(/export\s+const\s+Route\s*=\s*createFileRoute\([^)]+\)\(\{[\s\S]*?\}\);\s*/, '');
    
    // Replace to= with href=
    content = content.replace(/<Link([^>]*?)\bto=(['"])(.*?)\2/g, '<Link$1href=$2$3$2');
    
    // Fix default export name (e.g. AboutPage -> default function AboutPage)
    content = content.replace(/function\s+(\w+Page)\s*\(/, 'export default function $1(');

    if (isClient) {
        content = '"use client";\n' + content;
    }

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(targetDir, 'page.tsx'), content);
    console.log(`Adapted ${sourcePath} to ${targetDir}/page.tsx`);
}

adaptPage(
    path.join(__dirname, 'blajar-lovable/src/routes/about.tsx'), 
    path.join(__dirname, 'src/app/about')
);
adaptPage(
    path.join(__dirname, 'blajar-lovable/src/routes/products.tsx'), 
    path.join(__dirname, 'src/app/products')
);
adaptPage(
    path.join(__dirname, 'blajar-lovable/src/routes/contact.tsx'), 
    path.join(__dirname, 'src/app/contact'),
    true // isClient
);
