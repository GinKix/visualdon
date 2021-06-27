const xlsx = require('xlsx')

const file = xlsx.readFile('data.xlsx')
const json1 = xlsx.utils.sheet_to_json(file.Sheets['Recette_Cinema']);
const json2 = xlsx.utils.sheet_to_json(file.Sheets['Musee']);
const json3 = xlsx.utils.sheet_to_json(file.Sheets['Localisation_Musee']);

console.log(JSON.stringify(json1));

/* const data = require('./heig.json')
const fs = require('fs')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.natural === 'tree')
  .map(d => d.geometry.coordinates)

fs.writeFileSync('../src/arbres.json', JSON.stringify(result), 'utf-8') */




//export {json1, json2};
//console.log(DATA);