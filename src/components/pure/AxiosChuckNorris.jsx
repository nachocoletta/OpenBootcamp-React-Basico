import { Button } from '@mui/material';
import React, {useState, useEffect, useRef} from 'react';
import { getRandomJoke } from '../../services/axiosServiceChuck.js';

const AxiosChuckNorris = () => {

    const [joke, setJoke] = useState([]);
    const [notaLikes, setNotaLikes] = useState(0);
    const [notaDislikes, setNotaDislikes] = useState(0);

    useEffect( () => {
        getRandomJoke()
            .then( (response) => {
                if(response.status === 200){
                    console.log(response.data.value);
                    setJoke(response.data);
                }
            })
            .catch( (error) => {console.log(error)})
    }, [])
    
   
    const generateRandomJoke = () => {
        getRandomJoke()
            .then( (response) => {
                if(response.status === 200){
                    console.log(response.data.value);
                    setJoke(response.data);
                }
            })
            .catch( (error) => {console.log(error)})

    }

    const sumarLikeOrDislike = (boton) => {

        boton === 'botonLike' ? setNotaLikes(notaLikes + 1 ) : setNotaDislikes ( notaDislikes + 1 )
        
    }

    return (
        <div>
            <h1>Chuck Axios Example</h1>

            <h2>{joke.value}</h2>
            {/* <div>
                <img src={joke.icon_url} alt="imagen chuck" />
            </div> */}
            <div>
                <h3>Likes {notaLikes}</h3>
                <h3>Dislikes {notaDislikes}</h3>
            </div>

            <div style={{"margin": "5px"}}>
                <button style={{"margin": "5px"}} onClick={ () => { generateRandomJoke() }}>New Joke</button>
                <Button style={{"margin": "5px"}} variant='contained' onClick={() => sumarLikeOrDislike('botonLike')} >+</Button>
                <Button style={{"margin": "5px"}} variant='contained' onClick={() => sumarLikeOrDislike('botonDislike')}>-</Button>
            </div>
        </div>
    );
}

export default AxiosChuckNorris;




// const Axiosexample = () => {

//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         obtainUser();
//     }, []);

//     const obtainUser = () => {
//         getRandomUser()
//             .then((response) => {
//                 if(response.status === 200){
            
//                     setUser(response.data.results[0])
//                 }
//             })
//             .catch((error) => {
//                 alert(`Somethin went wrong: ${error}`);
//             })
//     }

//     return (
//         <div>
//             <h1>Axios Example</h1>

//             { user !== null ? 
//                 (
//                     <div>
//                         <img alt='avatar' src={user.picture.large} />
//                         <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
//                         <h3>{user.email}</h3>
//                     </div>
//                 )
//             :null }
//             <div>
//                 <p>Generate a new User</p>
//                 <button onClick={obtainUser}>
//                     Random User
//                 </button>
//             </div>
//         </div>
//     );
// }


