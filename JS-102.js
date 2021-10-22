const brBodova = prompt('Broj bodova: ');
let ocjena;

if (brBodova >= 89) {
   ocjena = 5;
} else if (brBodova >= 79) {
   ocjena = 4;
} else if (brBodova >= 65) {
   ocjena = 3;
} else if (brBodova >= 50) {
   ocjena = 2;
} else {
   ocjena = 1;
}

const str = ocjena < 2 ? 'Pad' : `Čestitke na osvojenom uspjehu, ${ocjena}`;

console.log(str);
