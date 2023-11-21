import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/reservation/wood-grain-pattern-gray1x.png"
import loginImg from "../../assets/menu/authentication2 1.png"
import SimpleLoginSyestem from "../../components/SimpleLoginSystem/SimpleLoginSyestem";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const SighnUp = () => {
  const { register,reset, handleSubmit,formState:{errors} } = useForm();
  const { createUser ,updateuserProfile}=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname|| '/'
  const axiospublic = useAxiosPublic()

  const onSubmit = (data) => {
      createUser(data.email, data.password)
        .then(result=>{
          toast.success("User Create  SuccessFull", {
            duration: 5000,
          });
           console.log(result.user);
            updateuserProfile(data.name , data.photoURL)
        .then(result=>{
      
// Create User Enty in Datavase  
        const userInfo = {
      name:data.name ,
      email:data.email
    }
 axiospublic.post('/users',userInfo)
 .then(res=>{
  if (res.data.insertedId) {
    reset()
    toast.success("User Create  SuccessFull", {
      duration: 5000,
    });
        
    navigate(from ,{replace:true});
  }
 })

})

.catch(err=>console.log(err.message))
    })
  }; 



    return (
        <div>
            <div className=" " style={{backgroundImage: `url(${loginBg})` }}>
             <Helmet>
    <title>Bistro Boss || SignUp</title>
    </Helmet>
    <Toaster position="top-center" reverseOrder={false} />

            <div className="hero min-h-screen shadow-md  " >
  <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl " style={{backgroundImage: `url(${loginBg}) ` } }>
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>


    <div className="card shrink-0 w-full max-w-sm  ">
        <h1 className="text-center mt-4 font-inter font-semibold text-5xl text-black ">SignUp</h1>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">Your Name</span>
          </label>
          <input type="text" {...register("name",{ required: true})}  name="name" placeholder="Name" className="input input-bordered"  />
          {errors.name?.type=== 'required' && <p className="text-red-500 font-inter mt-1">Name is required </p>}
        </div>

      <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">photo URL</span>
          </label>
          <input type="text" {...register("photoURL",{ required: true})}  name="photoURL" placeholder="photoURL" className="input input-bordered"  />
          {errors.photoURL?.type=== 'required' && <p className="text-red-500 font-inter mt-1">photoURL is required </p>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">Email</span>
          </label>
          <input type="email" {...register("email" ,{ required: true} )} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email?.type=== 'required' && <p className="text-red-500 font-inter mt-1">Email is required </p>}
         
        </div>
   

        <div className="form-control">
          <label className="label">
            <span className="label-text font-inter">Password</span>
          </label>
          <input type="password" {...register("password", { required: true ,minLength :6 , maxLength: 10})} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type=== 'minLength' && <p className="text-red-500 font-inter">Password must be 6 charctars! </p>}
          {errors.password?.type=== 'maxLength' && <p className="text-red-500 font-inter">Password is Over 10 chracters! </p>}
          {errors.password?.type=== 'required' && <p className="text-red-500 font-inter mt-1">Password is required! </p>}
          
        </div> 

     

  
        <div className="form-control mt-3">
          <input  className="hover:bg-[#D1A054B3] bg-[#D1A054B3]  btn py-2 rounded font-semibold font-inter text-white" type="submit" value={'Sign Up'} />
        </div>
        <Link className="text-[#D1A054] text-center underline font-inter" to="/login">Already registered? Go to log in</Link>
        <SimpleLoginSyestem></SimpleLoginSyestem>
      </form>
    </div>

  </div>
</div>
            
        </div>
        </div>
    );
};

export default SighnUp;