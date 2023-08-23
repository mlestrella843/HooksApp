import { useEffect, useState } from "react"

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

    useEffect( () => {
        console.log(' El useEffect se llamo');
    });


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
      
    </>
  )
}

