
import axios from 'axios';

export const create = (newData) => {
  axios.post("http://localhost:5000/register", newData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
