import { useState } from 'react'
import './asset/css/Login.css'
export default function Login() {
  const [error, setError] = useState(false);
  console.log(error);
  const submit = e => {
    e.preventDefault();
    var userDetails = {
      "userName":e.target[0].value,
      "email":e.target[1].value,
      "phoneNumber":e.target[2].value,
      "password":e.target[3].value
    }
    
    fetch("http://localhost:8080/rail/newUser", {
      method: 'POST',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails)
    }).then((response) => response.json())
      .then((result) => { console.log("success", result); }, (error) => { console.log("error", error); })
  }

  const hello = () => {
    console.log("i am here");
  }
  return (
    <section className="w-100 d-flex justify-content-center align-items-center bg-success p-3" style={{ minHeight: "100vh" }}>
      <form className="p-2 d-flex flex-column gap-2 loginBox bg-secondary" onSubmit={submit} id="some">
        <div className='w-100'>
          <label htmlFor="">User Name</label><br />
          <input type="text" name='userName' className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Email</label><br />
          <input type="text" name='email' className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Phone number</label><br />
          <input type="number" name='phoneNumber' className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Password</label><br />
          <input type="text" name='password' className='w-100' />
        </div>
        <div className='w-100 d-flex justify-content-end'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={hello}>close</button>

        </div>
      </form>
    </section>
  )
}
