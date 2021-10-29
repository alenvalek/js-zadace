const studenti = [
   {
      ime: 'Marko',
      prezime: 'Marković',
      grad: 'Pula',
   },
   {
      ime: 'Iva',
      prezime: 'Ivić',
      grad: 'Našice',
   },
   {
      ime: 'Lucija',
      prezime: 'Lucić',
      grad: 'Zagreb',
   },
   {
      ime: 'Nikola',
      prezime: 'Nikolić',
      grad: 'Rijeka',
   },
];
const napredna_pretraga = (lista, pojam) => {
   const pojmovi = pojam.split(' ');
   for (let i = 0; i < lista.length; i++) {
      let isOkay = false;
      for (let j = 0; j < pojmovi.length; j++) {
         const combination =
            lista[i].ime.toLowerCase() +
            lista[i].prezime.toLowerCase() +
            lista[i].grad.toLowerCase();
         if (
            lista[i].ime.toLowerCase().includes(pojmovi[j]) ||
            lista[i].prezime.toLowerCase().includes(pojmovi[j]) ||
            lista[i].grad.toLowerCase().includes(pojmovi[j]) ||
            combination.includes(pojmovi[j])
         ) {
            isOkay = true;
         } else {
            isOkay = false;
         }
      }
      if (isOkay) return i;
   }
};

console.assert(napredna_pretraga(studenti, 'ma ić') == 0); // → prvi student
console.assert(napredna_pretraga(studenti, 'ko lić ri') == 3); // → zadnji student
console.assert(napredna_pretraga(studenti, 'ić za') == 2); // → treći student
console.assert(napredna_pretraga(studenti, 'ić ko la ri') == 3); // → zadnji student
