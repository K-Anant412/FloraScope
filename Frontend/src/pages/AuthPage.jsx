import React, { useState, useEffect, createContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

const AuthPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSignin, setIsSignin] = useState(false);
    const { loginUser } = createContext(AuthContext);
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setServerError('');
        const result = await loginUser(data.email, data.password);

        if( result.success ){
            // navigate();
            alert("Login success");
        }else{
            setServerError(result.error);
        }
    };


  return (
    <div className="relative z-30 w-full h-full overflow-hidden flex items-center justify-center md:pl-20 p-5">

        {/*  Login card  */}
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="border rounded-2xl md:w-[65%] w-full md:h-[65%] h-[60%] relative md:-top-10 border-white/40 -top-28 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex items-center md:p-0 p-3 bg-[#E8F5E9]">
                
                <div
                    className={`md:w-[50%] w-full h-full flex flex-col items-center justify-center p-4 transition-transform duration-500 ease-in-out ${
                        isSignin ? 'md:translate-x-full' : 'md:translate-x-0'
                    }`}
                >
                    
                    <div className={`${ isSignin ? 'justify-center' : ''} w-full h-full flex flex-col items-center border-2 rounded-2xl bg-[#5fb25cc3] md:shadow-gray-600 md:shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]`} >

                    {/*  Title  */}
                    { isSignin 
                    ? " "
                    : <h1 className='shrink-0 w-full text-[#E8F5E9] h-fit font-["Fredoka"] text-2xl md:text-4xl font-semibold flex items-center justify-center p-3 md:p-6'>
                        FloraScope
                      </h1>
                    }

                        {/* ____________________________________________________________________________________*/}
                        { isSignin ? 
                        
                            <div className='md:border-2 w-full h-full md:w-[80%] md:h-[80%] md:bg-[#E8F5E9] rounded-2xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex flex-col items-center'>
                                
                                <h1 className='w-full h-fit text-gray-600 p-1 md:p-0 md:mt-6 md:text-2xl text-xl font-["nunito"] font-bold flex items-center justify-center'>
                                    { isSignin ? "Create Account" : "Login To Identify"}
                                </h1>

                                <div className='w-full h-fit m-4 flex flex-col items-center justify-center'>

                                    <input 
                                        type="text" 
                                        {...register("username", {
                                            required: "Username is required"
                                        })}
                                        placeholder='username'  
                                        className='w-[90%] md:w-[80%] h-10 m-2 bg-[#E8F5E9] border-2 rounded-3xl border-white md:border-gray-400 placeholder:text-xl pl-3 outline-none focus:border-[#A8D58D] focus:ring-2 focus:ring-[#A8D58D]'  
                                        />

                                    <input 
                                        type="email" 
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                        })}
                                        placeholder='@email'  
                                        className='w-[90%] md:w-[80%] h-10 m-2 bg-[#E8F5E9] border-2 rounded-3xl border-white md:border-gray-400 placeholder:text-xl pl-3 outline-none focus:border-[#A8D58D] focus:ring-2 focus:ring-[#A8D58D]'  
                                        />

                                    <input 
                                        type="password"
                                        {...register("password", { required: "Password is required" })} 
                                        placeholder='password'  
                                        className='w-[90%] md:w-[80%] h-10 m-2 bg-[#E8F5E9] border-2 rounded-3xl border-white md:border-gray-400 placeholder:text-xl pl-3 outline-none focus:border-[#A8D58D] focus:ring-2 focus:ring-[#A8D58D]'  
                                        />

                                </div>

                                <button 
                                    className='border rounded-3xl w-[60%] h-fit p-2 shadow-xl font-bold text-xl flex items-center justify-center bg-[#4F9D4D] text-white'
                                >
                                    { isSignin ? "Register" : "Log-in"}
                                </button>

                                <p className='w-full h-fit flex items-center justify-center gap-1 mt-3'>
                                    { isSignin ? "Already have an account?" : "Need an account?"}
                                    <a href="#"
                                    onClick={()=>setIsSignin(!isSignin)}
                                    className='text-[16px] font-semibold font-["nunito] text-[#377135] transition-all duration-400 hover:underline'>
                                        { isSignin ? "Log-in" : "Sign up"}
                                    </a>
                                </p>
                            </div> 
                        
                        :

                            <div className='md:border-2 w-full h-full md:w-[80%] md:h-[70%] md:bg-[#E8F5E9] rounded-2xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex flex-col items-center'>
                                
                                <h1 className='w-full h-fit text-gray-600 p-1 md:p-0 md:mt-6 md:text-2xl text-xl font-["nunito"] font-bold flex items-center justify-center'>
                                    { isSignin ? "Create Account" : "Login To Identify"}
                                </h1>

                                <div className='w-full h-fit m-4 flex flex-col items-center justify-center'>

                                    <input 
                                        type="text" 
                                        placeholder='@email'  
                                        className='w-[90%] md:w-[80%] h-10 m-2 bg-[#E8F5E9] border-2 rounded-3xl border-white md:border-gray-400 placeholder:text-xl pl-3 outline-none focus:border-[#A8D58D] focus:ring-2 focus:ring-[#A8D58D]'  
                                        />

                                    <input 
                                        type="password" 
                                        placeholder='password'  
                                        className='w-[90%] md:w-[80%] h-10 m-2 bg-[#E8F5E9] border-2 rounded-3xl border-white md:border-gray-400 placeholder:text-xl pl-3 outline-none focus:border-[#A8D58D] focus:ring-2 focus:ring-[#A8D58D]'  
                                        />

                                </div>

                                <button 
                                    type="submit"
                                    className='border rounded-3xl w-[60%] h-fit p-2 shadow-xl font-bold text-xl flex items-center justify-center bg-[#4F9D4D] text-white'
                                >
                                    { isSignin ? "Register" : "Log-in"}
                                </button>

                                <p className='w-full h-fit flex items-center justify-center gap-1 mt-3'>
                                    { isSignin ? "Already have an account?" : "Need an account?"}
                                    <a href="#"
                                    onClick={()=>setIsSignin(!isSignin)}
                                    className='text-[16px] font-semibold font-["nunito] text-[#377135] transition-all duration-400 hover:underline'>
                                        { isSignin ? "Log-in" : "Sign up"}
                                    </a>
                                </p>
                            </div>

                        }
                        {/* ____________________________________________________________________________________*/}

                    
                    </div>

                </div>

                {/*  Open section, visible only for desktop  */}
                <div className='md:flex hidden '>

                </div>

            </div>

        </form>
    </div>
  )
}

export default AuthPage