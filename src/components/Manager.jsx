import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import PasswordTable from "./PasswordTable";
import { v4 as uuidv4 } from 'uuid';


export default function Manager() {
    const [form, setForm] = useState({site: "", username: "", password: ""})
    const [passwordArray, setPasswordArray] = useState([]);
    const ref = useRef();
    const passRef = useRef();
    const buttonRef = useRef();

    useEffect(() => { 
        let passwords = localStorage.getItem("passwords");
        if(passwords){
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])
    
    
    const showPassword = () => {
        if(ref.current.src.includes("/eyecross.svg")){
            ref.current.src = "/eye-open.svg";
            passRef.current.type = "text"
        } else {
            ref.current.src = "/eyecross.svg";
            passRef.current.type = "password"
        }
    }

    const savePassword = () => {
        if(form.site != "" && form.password != "" && form.username != ""){
            setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
            console.log([...passwordArray, form]);
            setForm({site: "", username: "", password: ""}) 


        toast('Password saved successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        } else {
            alert("Any field can't be empty");
        }
    }

    const handleSubmit = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }


    return (
        <>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition="Bounce"
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className="p-2 md:px-0 md:mycontainer">
                <h1 className="text-3xl font-bold text-center">
                    <span className='text-purple-600'>&lt; </span>
                    Pass
                    <span className='text-purple-600'>wd /&gt; </span>
                </h1>
                <p className="text-lg text-center">very reliable password manager.</p>

                <div className=" flex flex-col p-4 text-black gap-4 md:gap-8 items-center">
                    <input  value={form.site} onChange={handleSubmit} name="site" placeholder="Enter website URL" className="rounded-full border border-violet-500 w-full px-4 py-2" type="url" />
                    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8">
                        <input  value={form.username} onChange={handleSubmit} name="username" placeholder="Username" className="rounded-full border border-violet-500 w-full px-4 py-2" type="text" />
                        <div className="relative w-full">
                            <input  value={form.password} onChange={handleSubmit} ref={passRef} type="password" name="password" placeholder="Password" className="rounded-full border border-violet-500 w-full px-4 py-2 pr-12" />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} width="25" height="20" src="/eyecross.svg"/>
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className="flex justify-center gap-2 items-center bg-violet-500 cursor-pointer hover:bg-violet-300 border-2 border-violet-900 rounded-full px-8 py-2 w-ft">
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                    <span ref={buttonRef}>Save Password</span></button>
                </div>

                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Your passwords </h2>
                    {passwordArray.length === 0 && <div> No passwords to show </div>}
                    {passwordArray.length != 0 && <PasswordTable passwordArray={passwordArray} setPasswordArray={setPasswordArray} setForm={setForm} buttonRef={buttonRef} />}
                </div>
            </div>
        </>
    )
}