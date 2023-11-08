const findOne = (list, { key, value }, { onSuccess, onError }) => {   //Constante a la que se le asigna una función que tiene como argumentos un array de objetos (en este caso 'users'), un objeto (con las propiedades 'key' y 'value') y otro objeto (cuyas propiedades son las funciones 'onSucces' y 'onError').
  setTimeout(() => {      //Método global que ejecuta el bloque definido cuando expira el temporizador (en este caso de 2s).
    const element = list.find(element => element[key] === value);  //Constante a la que se le asigna un array seguido del método find(), que devuelve el primer valor que cumple la condición definida: si el valor de la propiedad 'name' de uno de los objetos del array 'users' es igual al valor de la propiedad 'value' del primer objeto del argumento, entonces se le asigna a 'element' el primer elemento del array 'users' que cumple dicha condición. Si no es así, 'element' sería undefined.
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); //Si la constante anterior es unos del objetos del array 'users', que es truthy (los objetos son considerados truthy aunque estén vacíos), se llama a la función 'onSucces'. En caso contrario, la constante 'element' sería undefined, que es falsy, por tanto, se llama a la función 'onError'.
  }, 2000);
};
  
const onSuccess = ({ name }) => console.log(`user: ${name}`);  //Método que tiene como argumento un objeto (con propiedad 'name') y muestra por consola el valor de la propiedad 'name' del elemento del array 'users' que cumple la condición comentada anteriormente, seguido del string 'user: '.
const onError = ({ msg }) => console.log(msg); //Método que tiene como argumento un objeto (con propiedad 'msg') y muestra el mensaje 'ERROR: Element Not Found' cuando no se cumple la condición.

const users = [  //Array de objetos que es utilizado como primer argumento en la función asignada a 'findOne'.
{
  name: 'Carlos',
  rol: 'Teacher'
},
{
  name: 'Ana',
  rol: 'Boss'
}
];

console.log('findOne success'); //Muestra por consola 'findOne success'
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); //Primera llamada a la función de findOne

console.log('findOne error'); //Muestra por consola 'findOne success'
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }); //Segunda llamada a la función de findOne

/**Comentarios adicionales sobre el funcionamiento del código */
/*1. El navegador hace una lectura  de las constantes findOne, onSucces, onError y users. 
2. Luego, muestra por consola 'findOne success' de manera instantánea.
3. Posteriormente, se realiza la primera llamada a la función findOne y, una vez leídos los argumentos, se llama a la función setTimeOut, que ejecutará la función callback tras 2s una vez.
4. Más tarde, muestra por consola 'findOne error' de manera instantánea.
5. A continuación, cuando se cumple el tiempo establecido por la primera llamada al setTimeout(), ocurre lo siguiente:
- Se asigna element = {name: 'Carlos', rol: 'Teacher'} porque en la condición dentro del find() se cumple users[0].name === 'Carlos'.
- Como element es un objeto, que es trusthy, se ejecuta onSucces, imprimiendo por consola el mensaje 'user: Carlos'.
5. Por último, se ejecuta la segunda llamada al setTimeout():
- Se asigna element = undefined porque en la condición dentro del find() no se cumple users[0].name === 'Fermin' o users[1].name === 'Fermin'.
- Como element es undefined, que es falsy, se ejecuta onError, imprimiendo por consola el mensaje 'ERROR: Element Not Found'.*/


