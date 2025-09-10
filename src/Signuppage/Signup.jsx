import React, { useState } from 'react'
import './Signup.css'
import { image } from '../assets/assests'
import { ToastContainer, toast } from 'react-toastify';

const Signup = ({isopen, close}) => {
   if(!isopen) return null;

    const signtext = [
        {
            head: "Signup Get Your Meal",
            descrpt: "Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!",


            opt1: "Please Select",
            opt2: "option1",
            opt3: "option2",
            opt4: "option3",
            btn: "Submit"
        }
    ];

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        findUs:"Please Select"
    });

    const handlechge = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data,[name]: value}));
    }

    // const submit = (e) =>{
    //     localStorage.setItem("signup" , JSON.stringify(formData))
    //     alert("data saved")
    //     close();
    // }

     const submit = (e) =>{
        e.preventDefault();
        let store = JSON.parse(sessionStorage.getItem("signup"));

        if(!Array.isArray(store)){
            store = store ? [store] : [];
        }

        const newemail = formData.email.trim().toLowerCase();
        
        const samedata = store.findIndex(item => item.email.trim().toLowerCase() === newemail);
        
        if(samedata !== -1){
          store[samedata] = formData;

        }
        else {
            store.push(formData);
           
        }
        sessionStorage.setItem("signup" , JSON.stringify(store))
        toast.success("Login Successfully");
        close();
    }

    return (
        <div className='fixed inset-0 bg-black/70  flex items-center justify-center z-[999]'>
            
            <div className='  justify-center items-center rounded-lg signpage_box   relative z-[10000] w-[full] h-[310px]'>
                <div className='bg-[#f5943f] relative  flex gap-4 h-full signfirst_box w-[600px] rounded-lg'>
                    <button className='absolute top-2 right-4  z-50 text-2xl  text-white cursor-pointer' onClick={close}><i class="bi bi-x" ></i></button>
                    <div className=' p-6'>
                        {signtext.map((text) => (
                        < div className='flex flex-col md:gap-5 gap-2'>
                            <h1 className='md:text-3xl text-lg font-semibold mb-2'>{text.head}</h1>
                            <p className=' sign_p' >{text.descrpt}</p>

                            <form onSubmit={submit} className='grid grid-cols-2 gap-3 items-center justify-center'>
                                <div className='flex flex-col'>
                                    <label htmlFor="name" className='label_name'>Enter Name</label>
                                    <input type="text" id='name' placeholder='Enter Name' className='p-2  h-8 rounded text-black text-sm bg-white' 
                                    name='name'
                                    value={formData.name}
                                    onChange={handlechge}
                                    required
                                      style={{fontSize:"12px"}}
                                    />
                                </div>
                                <div className='flex flex-col ms-3'>
                                    <label htmlFor="email" className='label_name'>Enter Email</label>
                                    <input type="text" id='email' placeholder='Enter Email' className='p-2 h-8 rounded text-black text-sm bg-white'
                                    name='email'
                                    value={formData.email}
                                    onChange={handlechge}
                                    required
                                      style={{fontSize:"12px"}}
                                    />
                                </div>

                                <div className='flex flex-col '>
                                    <label htmlFor="" className='label_name'>Select Find Us</label>
                                    <select className='p-2 rounded text-black cursor-pointer h-8 text-sm bg-white'
                                    name='findUs'
                                    value={formData.findUs}
                                    onChange={handlechge}
                                    style={{fontSize:"12px"}}
                                    >
                                        <option >{text.opt1}</option>
                                        <option >{text.opt2}</option>
                                        <option >{text.opt3}</option>
                                        <option >{text.opt4}</option>
                                    </select>
                                </div>

                                <button type='submit'   className='bg-[#b15e15] ms-3 cursor-pointer text-white md:w-38 w-[90%]  px-5 h-8 rounded-lg mt-6'>{text.btn}</button>
                            </form>
                        </div>
                    ))}
                    </div>
                     <div className='h-full w-[500px]  '>
                    <img style={{
                        backgroundImage: `url(${image.Eat})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundBlendMode:"multiply",
                        backgroundColor:"rgba(245,148,63,0.6)"
                    }} className='  rounded-r-lg h-full w-full' alt="" />
                   
                </div>
                    
                </div>

                
                
            </div>
            

        </div>
    )
}

export default Signup
