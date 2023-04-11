import React, { useEffect, useState } from 'react'

const Gallery = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // life cycle of use state...........[] iska use refresh hone se rookne ke 
    // liye hota hai
    useEffect(()=>{
        console.log("Gallery is created");

        return () => {
            console.log("Gallery is destroyed")
        }
    },[])


  return (
    <>
    <h1>Username : {username}</h1>
    <button onClick={()=>setUsername("sid")}>get username</button>
    <hr />
    <h1>Password : {password}</h1>
    <button onClick={()=> setPassword("lol")}>get password</button>
    </>
  )
}

export default Gallery