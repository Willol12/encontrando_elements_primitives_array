//ENCONTRANDO ELEMENTOS PRIMITIVOS NO ARRAY
const numero = [1,2,3,4,1,5];
//indexOf procura dentro da array se existe o numero especifico e retorna a posição dele
//caso não exista o numero ele retorna o -1
console.log(numero.indexOf(1));
//o lastindexof caso tenha 2 numeros ou + 
//ele vai retornar a ultima posicao do array que tem o numero
console.log(numero.lastIndexOf(1));
//Com o ES6+ tem uma forma simples de descobrir se existe ou não o numero dentro do array
console.log(numero.includes(5));