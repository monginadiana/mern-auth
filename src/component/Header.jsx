import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center p-3 mx-auto max-w-4xl">
          <Link>
          <h1 className="font-bold">Auth-flow</h1>
          </Link>
          <ul className="flex gap-3">
             <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
           <Link to="/signup"><li>Signup</li></Link>
           <Link to='/signin'><li>SignIn</li></Link>             
          </ul>
        </div>
    </div>
  )
}
