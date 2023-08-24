import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState ({
        username: 'Maria',
        email: 'maria@google.com'
    });
       
    
    const {  username, email } = formState;

    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        // console.log( { name, value }  );
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // useEffect( () => {
    //     console.log(' The useEffect was called');
    // }, [] );

    // useEffect( () => {
    //     console.log(' The formState has changed');
    // }, [ formState ] );

    // useEffect( () => {
    //     console.log(' The email has changed');
    // }, [ email ] );

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="username"
            name="username"     
            value={ username }   
            onChange={ onInputChange }  
        />

<input 
            type="email" 
            className="form-control mt-2"
            placeholder="mrestrella4@gmail.com"
            name="email"   
            value={ email }       
            onChange={ onInputChange }
        />

        {
            ( username === 'Maria2' ) && <Message />
        }



      
    </>
  )
}

