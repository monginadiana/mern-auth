import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="p-3 mx-w-lg mx-auto">
      <h1 className="text-2xl text-center text-white font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type ='text' placeholder= "Username" id="username" className="bg-slate-300 p-3 rounded-lg"/>
        <input type ='text' placeholder= "Email" id="email"  className="bg-slate-300 p-3 rounded-lg"/>
        <input type ='password' placeholder= "Password" id="password" className="bg-slate-300 p-3 rounded-lg"/>
        <button className="bg-slate-700 text-white p-3 rounded-lg">Sign up</button>
      </form>
      <div>
        <p> Have an account</p>
        <Link to="/signin">
        <span>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
