

console.log('voce esta sendo interrogado de um assasinato, Digite 1 para sim e 0 para não');


let p1 = +prompt ('Telefonou para a vítima?');

let p2 = +prompt ('esteve no local do crime?');

let p3 = +prompt ('mora perto da vitima?');

let p4 = +prompt ('devia para a vitima?');

let p5 = +prompt ('ja trabalhou com a vitima?');



if (p1+p2+p3+p4+p5 === 0){
  console.log('Inocente');
  
} else if (p1+p2+p3+p4+p5 === 1){
  console.log('Inocnete');

} else if (p1+p2+p3+p4+p5 === 2){
  console.log('Você é suspeito')

} else if (p1+p2+p3+p4+p5 === 3){
  console.log('Cumplice');

} else if (p1+p2+p3+p4+p5 === 4){
  console.log('Cumplice');
  
} else if (p1+p2+p3+p4+p5 === 5){
  console.log('Assasino');
}
