const velicina = prompt('Velicina kvadrata: ');

for (let i = 0; i <= velicina; i++) {
   let str = '';
   for (let j = 0; j <= velicina; j++) {
      if (i % 2 == 0) {
         str += ' ';
         str += '#';
      } else {
         str += '#';
         str += ' ';
      }
   }
   console.log(str);
}
