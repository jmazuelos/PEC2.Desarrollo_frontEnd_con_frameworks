const findOne = async (list, { key, value }, { onSuccess, onError }) => {     
  const element = await resolveFind(list, { key, value }, { onSuccess, onError }); //espera hasta que la promesa esté resuelta
  element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }); //si el valor de la promesa es truthy...
};

async function resolveFind(list, { key, value }){
  return new Promise((resolve) => {
    resolve(list.find(element => element[key] === value)); 
  });
}

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
{
  name: 'Carlos',
  rol: 'Teacher'
},
{
  name: 'Ana',
  rol: 'Boss'
}
];

console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });