
import loginBg from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
import loginImg from "../../../assets/menu/authentication2 1.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";


const Login = () => {
    const ref = useRef(null)
    const [disabled , setDesabled] = useState(true)

    useEffect(()=>{
   
            loadCaptchaEnginge(6); 
       
    },[])

    const handlesubmit=(event)=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email , password);

    }
    const handlevalidation=()=>{
        const value = ref.current.value;
        console.log(value);
        if (validateCaptcha(value)) {
            setDesabled(false)
        } else{
            setDesabled(true)
        }

    }


    return (
       
        <div className=" " style={{backgroundImage: `url(${loginBg})` }}>
             <Helmet>
    <title>Bistro Boss || LogIn</title>
    </Helmet>

            <div className="hero min-h-screen shadow-md  " >
  <div className="hero-content flex-col lg:flex-row shadow-2xl " style={{backgroundImage: `url(${loginBg}) ` } }>
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>


    <div className="card shrink-0 w-full max-w-sm  ">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
     
         <label className="font-inter label">
          <LoadCanvasTemplate  />
          </label>
          <input type="text" ref={ref} name="capctha" placeholder="Typle This Capcha.." className="input input-bordered" required />
          <button onClick={handlevalidation} className="bg-[#D1A054B3]   rounded font-semibold text-sm mt-2 py-1 text-white">Validate</button>
         
        
        </div>


        <div className="form-control mt-3">
          <input disabled={disabled} className="hover:bg-[#D1A054B3] bg-[#D1A054B3]  btn py-2 rounded font-semibold font-inter text-white" type="submit" value={'Submit'} />
        </div>
      </form>
    </div>

  </div>
</div>
            
        </div>
    );
};

export default Login;