const firma = {
   ime: 'FIPU Electronics LTD',
   tip: 'LTD',
   vrijednost: {
      neto: 1000000,
      bruto: 1925395.2,
   },
   osnivaci: [
      {
         ime: 'Alen',
         prezime: 'Valek',
         DoB: new Date(1999, 8, 9),
         punoIme: ime + ' ' + prezime,
      },
      {
         ime: 'Marko',
         prezime: 'Markovic',
         DoB: new Date(1999, 8, 9),
         punoIme: ime + ' ' + prezime,
      },
   ],
   programi: ['Tečajevi', 'Studentska praksa', 'Stručna praksa'],
};

console.log('Ime firme: ' + '%c' + firma.ime, 'color: green');

const punoImeCEO = firma.osnivaci[0].ime + ' ' + firma.osnivaci[0].prezime;
const punoImeCofounder =
   firma.osnivaci[1].ime + ' ' + firma.osnivaci[1].prezime;

console.log('CEO: ' + '%c' + punoImeCEO, 'color: yellow;');
console.log('Cofounder: ' + '%c' + punoImeCofounder, 'color: yellow;');
