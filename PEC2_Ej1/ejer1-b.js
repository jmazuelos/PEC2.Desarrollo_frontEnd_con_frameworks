const findOne = (list, { key, value }, /*{ onSuccess, onError }*/) => {
  const promise = new Promise((resolve) => {
    resolve(list.find(element => element[key] === value));
  });

  return promise;
  //promise.then(element => onSuccess(element)).catch(error => onError({ msg: 'ERROR: Element Not Found' }));
};

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
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }).then(element => onSuccess(element)).catch(error => onError({ msg: 'ERROR: Element Not Found' }));

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }).then(element => onSuccess(element)).catch(error => onError({ msg: 'ERROR: Element Not Found' }));

