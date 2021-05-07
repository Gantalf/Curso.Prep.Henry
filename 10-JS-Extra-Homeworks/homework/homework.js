// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /**
   * utilizando metodos podria resolver así:
   * let objetToArray = Object.entries(objeto);
     return objetToArray; 
   */

  //Diferente:
  //creamos un array vacio
  let array=[];
  //recorremos el objeto por cada key
  for (let prop in objeto){
    //luego pusheamos al array la key y el valor de esta manera
    array.push([prop, objeto[prop]])
  }
  return array;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /**
   * Evalúa que lo que mandas en la posición del objeto en ese momento, que es un string, no exista o "no este repetido" y si no lo está, es false, inicializa la variable en 0, de caso contrario suma una vez por sí mismo el valor con el que se haya encontrado a esa variable. Eso es, básicamente lo que hace el programa
   */
  //creamos un objeto vacio
  let obj = {};
  //recorremos letra por letra del string
  for (let i=0; i<string.length; i++){
    //Si existe en el objeto una clave igual al caracter del string donde estamos parado, que le sume 1
    if(obj[string[i]]){
      obj[string[i]] += 1;
    }else{
      //si no existe, que cree ese elemento y le asigne el valor 1
      obj[string[i]] = 1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let str = [];
  let min = [];
  for (i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      str.push(s[i]);
    }else{
      min.push(s[i])
    }
  }
  let strToString = str.toString();
  let finalStr = strToString.replace(/,/gi, '');
  let minToString = min.toString();
  let finalMin = minToString.replace(/,/gi, '');

  let finalS = finalStr + finalMin;
  return finalS;

  /**
   * Bueno, el trabajo de pasar a array era totalemnte inecesario, podia haber trbajado solo con el string. Resolucion mucho mas facil:
   * let min = '';
   * let may = '';
   * for (i=0;i<s.length;i++){
      if (s[i] === s[i].toUpperCase()){
          may += s[i];
        }else{
          min += s[i];
        }
      }
      return may + min;

   */

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strToArray = str.split(' ');
  rever = [];
  for (let i=0; i < strToArray.length; i++){
    rever.push(strToArray[i].split('').reverse().join(''));
  }
  let reverStr = rever.toString();
  let finalRever = reverStr.replace(/,/gi, ' ');
  return finalRever;

  //resolucion del profesor:
  /**
   * creamos variable donde se va a guardar la frase invertida
   * var mirror = '';
   * recorremos la frase de atras para adelante
   * for (let i=str.length - 1; i>=0; i--){
   *  guardamos las letras en la variable
   *  mirror += str[i];
   * }
   * hasta ahora tendriamos la frase al reves, pero tambien al reves la ubicacion de las palabras. Ahora tenemos que ordenar la ubicacion de las palabras.
   * vamos a guardar en un array cada palabra como valor:
   * var array = mirror.split(' ');
   * ahora vamos a revertir esos valores, asi la primera palabra queda en el primer lugar y asi sucesivamente y la volvemos a transformar en un string
   * return array.reverse().join(' ');
   */
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numToStr = numero.toString();
  let numInvertido =  numToStr.split('').reverse().join('');
  if (numToStr === numInvertido) {
    return 'Es capicua';
  }else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //hagamos un array de las letras a excluir
  var exclude = ['a', 'b', 'c'];
  //variable que vamos a devolver
  var newString = '';
  //ahora vamos a recorrer el string
  for(let i=0;i<cadena.length;i++){
    //si la cadena de caractere, no incluye (!) lo que tenemos en exclude, que lo agregue a la newString
    if (!exclude.includes(cadena[i])){
      newString += cadena[i];
    }
  }
  return newString;


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i=0; i<arr.length; i++){
    let temp= arr[i];
    let j = i-1;
    while(j>=0 && temp.length<arr[j].length){
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] = temp;
  }
  return arr;
}
//explicacion
/**
 * nos llega este array:
 * ["You", "are", "beautiful", "looking"]
 * i   0     1         2           3
 * para i=0 ->
 * temp = "you"
 * i=0 -> j=-1
 * entonces en este caso no entra al while, pasa a la siguiente linea
 * j=-1 -> -1 +1
 * arr[0] = "you"
 * 
 * para i=2 ->
 * temp = "are"
 * i=1 -> j=0
 * no entra al while todavia
 * j=0 -> 0 +1
 * arr[1]= "are"
 * 
 * para i=2 ->
 * temp = "beautiful"
 * i=2 -> j=1
 * sigue sin entrar al while
 * j=1 -> 1+1
 * arr[2]="beautiful"
 * 
 * i=3 ->
 * temp="looking"
 * i=3 -> j=2
 * Si entra al while. j es mayor a cero y la palabra es menor en longitud
 * entonces le dice:
 * en al posicion j+1 vas a poner lo que tenias en la posicion anterior (beautiful en este caso) luego en j descuento una unidad (j--). vuelvo a intentar av er si se cumpole el while:
 * ahora j=1, primera condicion pasa, pero la palabra lookin no es menor a la posicion 1 ( are en este caso)
 * asi que paso a la sig linea. Entonces en la posicion j+1=2 pongo lookin. y ahi me queda ordenado. 
 */

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  let interseccion = [];
  for (i=0; i<arreglo1.length; i++){
    
    for(j=0; j<arreglo2.length; j++){
      if (arreglo1[i]===arreglo2[j]){
        interseccion.push(arreglo1[i])
      }
    }
  }
  return interseccion;

  //otra forma
  /**
   * let interseccion = [];
   * for (i=0; i<arreglo1.length; i++){
   *    if(arreglo2.includes(arreglo1[i])){
   *      interseccion.push(arreglo1[i])
   *    }
   * }
   * return interseccion;
   */
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

