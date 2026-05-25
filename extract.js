const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlDir = path.join(__dirname, '6_web_files');
const outDir = path.join(__dirname, 'src', 'data');
const outFile = path.join(outDir, 'products.json');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

const products = [];

for (const file of files) {
    const filePath = path.join(htmlDir, file);
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);

    const slug = file.replace('.html', '');
    
    // category
    let category = '';
    if (slug.includes('bundle')) category = 'bundle';
    else if (slug.includes('live')) category = 'live-shopping';
    else if (slug.includes('gen1') || slug.includes('gen2')) category = 'transisi-generasi';

    // accent color
    const styleContent = $('style').html() || '';
    const match = styleContent.match(/--accent:\s*(#[0-9A-Fa-f]+)/);
    const accent_color = match ? match[1] : '#FE2C55';

    // prices
    const priceStr = $('.price-main').first().text().replace(/[^\d]/g, '');
    const price = parseInt(priceStr) || 0;
    
    const oriPriceStr = $('.price-ori').first().text().replace(/[^\d]/g, '');
    const price_original = parseInt(oriPriceStr) || 0;

    // hero
    const headline = $('.hero h1').text().trim();
    const subheadline = $('.hero-sub').first().text().trim();

    // stats
    const stats = [];
    $('.stat').each((_, el) => {
        stats.push({
            number: $(el).find('.stat-num').text().trim(),
            label: $(el).find('.stat-label').text().trim()
        });
    });

    // pain points
    const pain_points = [];
    $('.pain-text').each((_, el) => {
        pain_points.push($(el).text().trim());
    });

    // modules / bundles
    const modules = [];
    $('.content-card').each((_, el) => {
        modules.push({
            tag: $(el).find('.content-tag').text().trim(),
            desc: $(el).find('.content-desc').text().trim()
        });
    });
    
    // For bundle items
    if (modules.length === 0) {
        $('.bundle-item').each((_, el) => {
            modules.push({
                tag: $(el).find('.bundle-item-title').text().trim(),
                desc: $(el).find('.bundle-item-desc').text().trim()
            });
        });
    }

    // personas
    const personas = [];
    $('.for-who-card').each((_, el) => {
        personas.push({
            icon: $(el).find('.for-who-icon').text().trim(),
            title: $(el).find('.for-who-title').text().trim(),
            desc: $(el).find('.for-who-desc').text().trim()
        });
    });

    // testimonials
    const testimonials = [];
    $('.testi-card').each((_, el) => {
        testimonials.push({
            stars: $(el).find('.testi-stars').text().trim(),
            text: $(el).find('.testi-text').text().trim(),
            author: $(el).find('.testi-author').text().trim()
        });
    });

    // faqs
    const faq = [];
    $('.faq-item').each((_, el) => {
        faq.push({
            q: $(el).find('.faq-q').text().trim(),
            a: $(el).find('.faq-a').text().trim()
        });
    });

    products.push({
        slug,
        name: headline.replace('Panduan ', '').replace('Bundle ', '').trim(),
        category,
        price,
        price_original,
        mayar_url: '#',
        accent_color,
        thumbnail: `/images/${slug}.jpg`,
        headline,
        subheadline,
        stats,
        pain_points,
        modules,
        personas,
        testimonials,
        faq
    });
}

fs.writeFileSync(outFile, JSON.stringify(products, null, 2));
console.log(`Extracted ${products.length} products to ${outFile}`);
