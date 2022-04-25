import React, {useState} from 'react'
import { addDoc, collection, } from 'firebase/firestore';
import { db } from '../utils/firebase';

const MyAccount = () => {
    const [user, setUser] = useState({name: '', surname: '', email: '',  age: ''});
    const campos = [
        {title:"Nombre", type:"text", inputName:"name"},
        {title:"Apellido",type:"text", inputName:"surname"},
        {title:"Edad", type:"number", inputName:"age"},
        {title:"Email", type:"email", inputName:"email"}
    ]

    function onChangeInput(evt) {
        setUser({ ...user, [evt.target.name]: evt.target.value});       
    }
    async function signUp(e) {
        e.preventDefault();

        const newUser = {
            Usuario:{
                Nombre : user.name,
                Apellido :  user.surname,
                Edad : user.age,
                Email : user.email
            }
        }
        console.log('new user', newUser);
        const usersCollection = collection(db, 'users');
        const docRef = await addDoc(usersCollection, newUser);
        console.log('usuario: ', docRef.id);
    }



    
    return (
        <div className='signUp'>
            <div className='signUpContainer'>
                <h1>Registrarse</h1>
                {
                    campos.map(campo =>(
                        <div className='signUpInput'>
                            <label>{campo.title}</label>
                            <input type={campo.type} name={campo.inputName} onChange={(evt) => onChangeInput(evt)}/>
                        </div> 
                    ))
                }

                {
                    <button
                        className='signUpBtn'
                        disabled={!(user.name !== '' && user.surname !== "")}
                        onClick={(evt) => signUp(evt)}>

                        Registrarse
                    </button>  
                }
                <a href="./">Ya tienes una cuenta?</a>
            </div>
        </div>
        
    )
}
export default MyAccount
