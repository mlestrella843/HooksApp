import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState ({
        username: 'Maria',
        email: 'maria@google.com'




    })
       
    



  return (
    <>
    
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="username"
            name="username"          
        />

<input 
            type="email" 
            className="form-control mt-2"
            placeholder="mrestrella4@gmail.com"
            name="email"          
        />
    
    
    
    </>
  )
}

