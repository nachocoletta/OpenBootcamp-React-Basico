import APIRequest from '../utils/config/axiosConfigChuck';


export function getRandomJoke() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://randomuser.me/api/ 
}


