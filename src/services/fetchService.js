export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);

    // We return the json
    return response.json()
}


export const getAllPagedUsers = async (page) => {
    
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);

    // We return the json
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);

    // We return the json
    return response.json()
}


export const login = async (email, password) => {

    let body = {
        email: email,
        password: password
    }
    // console.log(JSON.stringify(data))


    // const response = await fetch('https://reqres.in/api/login', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return response.json(); // parses JSON response into native JavaScript objects
    // }


    const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        mode: 'cors',
        // credentials: "omit",
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(body)
    });
    console.log('Token: ', response.token);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    return response.json();
}











