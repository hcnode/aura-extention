const axios = require('axios');
const fs = require('fs');

(async function(){
    const response = await axios.get('https://raw.githubusercontent.com/microsoft/vscode/main/extensions/html/syntaxes/html.tmLanguage.json')
    const htmlLanguage = response.data;
    const auraLanguage = JSON.parse(fs.readFileSync('./syntaxes/html.tmLanguage.json').toString())
    auraLanguage.patterns = htmlLanguage.patterns;
    auraLanguage.repository = htmlLanguage.repository;
    fs.writeFileSync('./syntaxes/html.tmLanguage.json', JSON.stringify(auraLanguage, null, '\t'))
})()