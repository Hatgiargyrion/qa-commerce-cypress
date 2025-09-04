const marge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const fs = require('fs');
const path = require('path');

async function generate() {
    try {
        const jsonReport = await marge.merge({
            files: ['./cypress/reports/*.json']
        });

        await generator.create(jsonReport, {
            reportDir: './cypress/reports/final',
            reportFilename: 'mochawesome',
            inlineAssets: true,
            charts: true
        });

        const reportFiles = fs.readdirSync('./cypress/reports');
        reportFiles.forEach(file => {
            if (file.endsWith('.json')) {
                fs.unlinkSync(path.join('./cypress/reports', file));
            }
        });

        console.log('✅ Relatório final gerado e JSONs intermediários excluídos!');
    } catch (err) {
        console.error('❌ Erro ao gerar relatório:', err);
        process.exit(1);
    }
}

generate();
