import './asset/css/Login.css'
export default function Login() {
  return (
    <section className="w-100 d-flex justify-content-center align-items-center bg-success p-3" style={{ minHeight: "100vh" }}>
      <div className="p-2 d-flex flex-column gap-2 loginBox bg-secondary">
        <div className='w-100'>
          <label htmlFor="">User Name</label><br />
          <input type="text" className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Email</label><br />
          <input type="text" className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Phone number</label><br />
          <input type="text" className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Password</label><br />
          <input type="text" className='w-100' />
        </div>
        <div className='w-100'>
          <label htmlFor="">Password</label><br />
          <input type="text" className='w-100' />
        </div>
      </div>
    </section>
  )
}