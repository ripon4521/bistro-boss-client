import loginBg from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImg from "../../../assets/menu/authentication2 1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import SimpleLoginSyestem from "../../../components/SimpleLoginSystem/SimpleLoginSyestem";
import fb from "../../../assets/Login/fb_icon_325x325-removebg-preview.png";
import google from "../../../assets/Login/q8-vPggS_400x400-removebg-preview.png";
import github from "../../../assets/Login/GitHub-Mark-ea2971cee799-removebg-preview.png";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Login = () => {
  // const ref = useRef(null);
  const [disabled, setDesabled] = useState(true);
  // AuthContext
  const { sighnIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname|| '/';
  const  axiosPublic = useAxiosPublic();
  // Capctha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Signed in
  const handlesubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    sighnIn(email, password)
      .then((userCredential) => {
        // Signed in
        toast.success("Sign In  SuccessFull", {
          duration: 5000,
        });
      
        const result = userCredential.user;
        console.log(result);
        navigate(from ,{replace:true});
      })
      .catch((error) => {
        toast.error(error.message, {
          duration: 5000,
        });
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Validation
  const handlevalidation = (e) => {
    const value = e.target.value;

    console.log(value);
    if (validateCaptcha(value)) {
      setDesabled(false);
    } else {
      setDesabled(true);
    }
  };

  // const { googleLogin }=useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {


        toast.success("Login SuccessFull", {
          duration: 5000,});
          const userinfo ={
            email: result.user?.email,
            name: result.user?.displayName
          }
          axiosPublic.post('/users',userinfo)
          .then(res=>console.log(res))
    
        navigate(from ,{replace:true});

      })
      .catch((error) => {
        toast.warning(error.message, {
          duration: 5000,
        });
      });
  };



  return (
    <div className=" " style={{ backgroundImage: `url(${loginBg})` }}>
      <Helmet>
        <title>Bistro Boss || LogIn</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="hero min-h-screen shadow-md  ">
        <div
          className="hero-content flex-col lg:flex-row shadow-2xl "
          style={{ backgroundImage: `url(${loginBg}) ` }}
        >
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>

          <div className="card shrink-0 w-full max-w-sm  ">
            <h1 className="text-center mt-4 font-inter font-semibold text-5xl text-black ">
              Login
            </h1>
            <form onSubmit={handlesubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-inter">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-inter">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="font-inter label">
                  <LoadCanvasTemplate />
                </label>
                <input 
                 onBlur={handlevalidation}
                  type="text"
             
                  name="capctha"
                  placeholder="Typle This Capcha.."
                  className="input input-bordered"
                  required
                />
              
              </div>

              <div className="form-control mt-3">
                <input
                  disabled={disabled}
                  className="hover:bg-[#D1A054B3] bg-[#D1A054B3]  btn py-2 rounded font-semibold font-inter text-white"
                  type="submit"
                  value={"Log in"}
                />
              </div>
              <Link
                className="text-[#D1A054] text-center underline font-inter"
                to="/register"
              >
                Never You? Create a New Account
              </Link>
              <div>
                <h1 className="text-black text-xl font-inter text-center my-4">
                  Or Sign in With
                </h1>
                <div className="flex gap-3 justify-center items-center">
                  <img className="w-[40px]" src={fb} alt="" />
                  <img
                    onClick={handleGoogleLogin}
                    className="w-[50px] cursor-pointer  "
                    src={google}
                    alt=""
                  />
                  <img className="w-[50px]" src={github} alt="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
