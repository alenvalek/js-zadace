const provjeri = (lista, pojam, status) => {
   for (let i = 0; i < lista.length; i++) {
      if (lista[i].upisan == status) {
         if (lista[i].ime.includes(pojam) || lista[i].prezime.includes(pojam))
            return true;
      }
   }
   return false;
};

const studenti = [
   {
      ime: 'Marko',
      prezime: 'Marković',
      upisan: false,
   },
   {
      ime: 'Petar',
      prezime: 'Perić',
      upisan: true,
   },
   {
      ime: 'Alen',
      prezime: 'Valek',
      upisan: true,
   },
   {
      ime: 'Matej',
      prezime: 'Kurevija',
      upisan: true,
   },
   {
      ime: 'Maja',
      prezime: 'Vrh',
      upisan: true,
   },
   {
      ime: 'Dominik',
      prezime: 'Ružić',
      upisan: true,
   },
   {
      ime: 'Andrej',
      prezime: 'Korica',
      upisan: false,
   },
   {
      ime: 'Tea',
      prezime: 'Tadić',
      upisan: false,
   },
   {
      ime: 'Melita',
      prezime: 'Ivanov',
      upisan: false,
   },
   {
      ime: 'Ena',
      prezime: 'Grašković',
      upisan: false,
   },
];

console.log(provjeri(studenti, 'Matej', true));
console.log(provjeri(studenti, 'Ena', true));
console.log(provjeri(studenti, 'Valek', false));
console.log(provjeri(studenti, 'Bruno', false));
