import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handlelogic = () => {
    if (email && password) {
      Navigate("/dashboard");
    }
  };

  const handling = () => {
    Navigate("/register");
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-linear-to-br from-green-500">
        <div className="bg-transparent backdrop-blur-3xl flex flex-col gap-12 min-h-80 items-center justify-center min-w-96 rounded-xl shadow-xl ">
          <h2 className="flex items-center text-center justify-center text-blue-900 font-bold text-4xl hover:text-red-700  ">
            LOGIN
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <input
              className=" outline-none border-2 rounded-md h-10 w-80 text-center "
              type="email"
              required
              placeholder="Please Enter Your Email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className=" outline-none border-2 rounded-md h-10 w-80 text-center "
              type="password"
              required
              placeholder="Please Enter Your Password"
              value={password}
              name="email"
              id="email"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Login" onClick={handlelogic} />
            <div className="m-0 flex items-center justify-center flex-col gap-3">
              <p>You Don't Have An Account?</p>
              <Link to="/register">
                <Button text="Register" onClick={handling} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
