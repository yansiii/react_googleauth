import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebaseConfig'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Login () {
    const[user, setUser] = useState(null)
    useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(currentUser)=>{
            if (currentUser)
                setUser(currentUser)
        })
    },[])

    const handleLogin = async()=>{
        let user = await signInWithPopup(auth,provider);
        console.log(user)
        setUser(user.user)
    }
    const handleSignOut = async ()=>{
        await signOut(auth);
        setUser(null)
    }
  return (
    <div>
      {
        user ?
        <div>
          <div className="a">
          <div className="c">
            <div className="e">
            <img src={user.photoURL}  alt="pic" /> <br />
            <h2>Hellooo {user.displayName}</h2>
            <h3>Welcome {user.email}</h3> <br />
            <button onClick={handleSignOut}>Sign Out</button>
            </div>
            <div className="f">
              <div className="f1"><h4><FaFacebook /> </h4></div>
              <div className="f1"> <h4><FaTwitter /></h4>
              </div>
              <div className="f1"> <h4><MdEmail /></h4>
              </div>
            </div>
            </div>
            <div className="b">
            <img src="https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2147.jpg?w=360" alt="" />
            </div>
            
            </div>
        </div>
        :
        <div className='a'>
         <div className='b'>
          <img src="https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2147.jpg?w=360" alt="" />
         </div>
        <div className='c'>
          <div className='d'>
          <h1>Heyy Beautiful!</h1>
            <h3>Login Please</h3><br />
            <input type="email" placeholder='abc@gmail.com' name="" id="" /> <br /><br />
            <input type="password" placeholder='********' name="" id="" /> <br /> <br />
        <button onClick={handleLogin}>Log In</button>
        </div>
        <div className="f">
              <div className="f1"><h4><FaFacebook /> </h4></div>
              <div className="f1"> <h4><FaTwitter /></h4>
              </div>
              <div className="f1"> <h4><MdEmail /></h4>
              </div>
            </div>
        </div>
        
        </div>
      }
    </div>
  )
}
