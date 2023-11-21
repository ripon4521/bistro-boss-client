import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxoisSecure = () => {
   return axiosSecure
};

export default useAxoisSecure;