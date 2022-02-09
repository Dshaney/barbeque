const names = ["Lisa", "Dshane", "Kati", "Parish", "Abbi"];

function main() {
  const sorted = names.sort(function compare(a,b) {
    if (a<b) {
      return -1;
    } else if (b<a) {
      return 1;
    } 
    return 0;
  });
  console.log(sorted);
}

main();
