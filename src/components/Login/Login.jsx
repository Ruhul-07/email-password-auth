import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef(); 

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset status
        setSuccess(false)
        setLoginError('')

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)

            if(!result.user.emailVerified){
                setLoginError('Please verify your email address')
            }
            else{
                setSuccess(true)
            }

            
        })
        .catch(error => {
            console.log('ERROR', error)
            setLoginError(error.message)
        })
    }
    const handleForgetPassword = () => {
        console.log('get an email address')
        const email = emailRef.current.value;
        if(!email){
            console.log('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('reset email sent pleasen, check your email')
            })
        }
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center pt-5 my-10 mx-auto">
      <h3 className="text-3xl font-bold">Sign Up now!</h3>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label onClick={handleForgetPassword} className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          {/* <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">
                Please accept our terms and condition
              </span>
            </label>
          </div> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {success && (
        <p className="text-green-600">User login Successfully</p>
      )}
      {loginError && <p className="text-red-600">{loginError}</p>}
      <p className="mb-10">
        New to this website ? Please <Link to="/signUp"><button className="btn btn-xs">Sign Up Now</button></Link>
      </p>
    </div>
  );
};

export default Login;
