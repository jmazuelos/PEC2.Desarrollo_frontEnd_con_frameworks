const findOne = async ({ onSuccess, onError }) => {     
  let [promise1, promise2] = await Promise.all([resolveFind(users, { key: 'name', value: 'Carlos' }), resolveFind(users, { key: 'name', value: 'Fermin' })]);

  promise1 ? onSuccess(promise1) : onError({ msg: 'ERROR: Element Not Found' });
  promise2 ? onSuccess(promise2) : onError({ msg: 'ERROR: Element Not Found' });
};

function resolveFind(list, { key, value }){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list.find(element => element[key] === value)); 
    }, 2000);
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

findOne({ onSuccess, onError });

console.log('findOne error');


