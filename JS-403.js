const zagrade = (str) => {
   const stog = [];
   for (let i = 0; i < str.length; i++) {
      let element = stog[stog.length - 1];
      if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
         stog.push(str[i]);
      } else if (
         (element == '(' && str[i] == ')') ||
         (element == '[' && str[i] == ']') ||
         (element == '{' && str[i] == '}')
      ) {
         stog.pop();
      } else {
         return false;
      }
   }
   return stog.length ? false : true;
};
console.log(zagrade('[()]()()')); // → true
console.log(zagrade('{[((()))]}')); // → true
console.log(zagrade('({)}')); // → false
