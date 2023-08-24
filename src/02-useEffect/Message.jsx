
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log(' Message Mounted' );
    
      return () => {
        console.log( 'User Unmounted' );
      }
    }, [])
    
    return (
        <>
            <h3>User already exist...</h3>       
        </>
    )
}
