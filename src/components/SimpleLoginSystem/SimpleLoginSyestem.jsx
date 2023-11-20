
import fb from "../../assets/Login/fb_icon_325x325-removebg-preview.png"
import google from "../../assets/Login/q8-vPggS_400x400-removebg-preview.png"
import github from "../../assets/Login/GitHub-Mark-ea2971cee799-removebg-preview.png"



const SimpleLoginSyestem = ({handleGoogleLogin}) => {


    return (
        <div>
            <h1 className="text-black text-xl font-inter text-center my-4">Or Sign in With</h1>
            <div className="flex gap-3 justify-center items-center">
                <img className="w-[40px]" src={fb} alt="" />
                <img onClick={handleGoogleLogin} className="w-[50px] cursor-pointer  " src={google} alt="" />
                <img className="w-[50px]" src={github} alt="" />
            </div>

        </div>
    );
};

export default SimpleLoginSyestem;