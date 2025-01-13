import { FaEnvelope, FaPassport, FaSortAmountUpAlt, FaStamp, FaUser } from 'react-icons/fa';
import login from '../../../public/1330194.jpeg';
import { TbPassword } from "react-icons/tb";
import '../Login/Login.css'
import { BsListNested } from 'react-icons/bs';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa6';
const Login = () => {
    return (
        <div className="Login_Item bg-cover bg-center h-screen">
            {/* <div>
                <img src={login}></img>
            </div> */}


            <div className="flex items-center justify-center h-full bg-black-50 ">
                <div class="backdrop-blur-xl rounded-lg shadow-lg p-8 w-[600px] bg-opacity-50 bg-transparent">
                    <h2 class="text-center text-2xl font-semibold text-white mb-6">Sign In</h2>

                    <div class="flex justify-between items-center mb-4">
                        {/* <FaEnvelope className='text-4xl text-white mr-2 '></FaEnvelope> */}
                        <input
                            type="email"
                            placeholder="Email" className="w-full rounded-lg border-b-2 text-black focus:border-blue-500 focus:outline-none placeholder-gray-400 py-2 px-2 font-bold"
                        />

                    </div>


                    <div class="flex justify-between items-center mb-4">
                        {/* <FaUser className='text-4xl text-white mr-2'></FaUser> */}
                        {/* <TbPassword className='text-4xl text-white mr-2'></TbPassword> */}
                        <input type="password" placeholder="Password" className=" rounded-lg w-full text-black border-b-2 focus:border-blue-500  focus:outline-none placeholder-gray-400 py-2 px-2 font-bold" />

                    </div>
                    <div class="flex justify-between items-center mb-4 text-white">
                        <p className='underline'>Forget Password ?</p>
                    </div>



                    <div class="flex justify-between items-center mb-4">
                        <button className="btn w-full bg-blue-950 text-white">Sign In</button>
                    </div>

                    <div class="flex items-center mb-4 text-white gap-2">
                        <input type="checkbox" name="" id="" />
                        <p >Keep me signed in</p>
                    </div>

                    <div class="flex justify-between items-center mb-4 text-white gap-2">
                        <div>
                            <p >Sign Up OR sign in with</p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <FaGoogle className='text-2xl'></FaGoogle>
                            <FaTwitter className='text-4xl'></FaTwitter>
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </div>
                    </div>





                </div>

            </div>

        </div>
    );
};

export default Login;