const idades = [12, 17, 18, 22, 15, 30];

const filter = idades.filter((idade) => idade > 20);

let map = idades.map((idade) => idade * 20);

console.log(filter);
console.log(map);

let filterEhMapJuntos = idades
 .map((idades) => idades * 2)
 .filter((idade) => idade > 20);

console.log(filterEhMapJuntos);