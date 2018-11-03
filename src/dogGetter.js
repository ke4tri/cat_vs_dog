import axios from 'axios';

// Long way if you want to manipulate data first
// const getDogs = () => new Promise((resolve, reject) => {
//   axios.get('https://random-dogs-api.herokuapp.com/dogs/15')
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// });

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/15');

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line linebreak-style
export { getDogs };
