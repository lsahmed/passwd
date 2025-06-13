import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PasswordTable({ passwordArray, setPasswordArray, setForm }) {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        toast('Copied to clipboard!', {
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
    }

    const deletePassword = (id) => {
        toast('password deleted successfully!', {
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
        console.log("Delete password for the id: ", id);
        let conf = confirm("Do you really want to delete the password?");
        if(conf){
            setPasswordArray(passwordArray.filter(item=>item.id!=id));
            localStorage.setItem(passwordArray.filter(item=>item.id!=id));
        }

    }
    
    const editPassword = (id) => {
        console.log("Editing password for the id: ",id);
        setForm(passwordArray.filter(item=>item.id == id)[0]);
        setPasswordArray(passwordArray.filter(item=>item.id!=id));
        localStorage.setItem(passwordArray.filter(item=>item.id!=id));
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

        <div className="overflow-x-auto">
            <table className="table-auto w-full rounded-md overflow-hidden min-w-[640px]">
                <thead className="bg-violet-800 text-white">
                    <tr>
                        <th className="py-2 px-2 text-sm sm:text-base">Site</th>
                        <th className="py-2 px-2 text-sm sm:text-base">Username</th>
                        <th className="py-2 px-2 text-sm sm:text-base">Passwords</th>
                        <th className="py-2 px-2 text-sm sm:text-base">Actions</th>
                    </tr>
                </thead>
            <tbody className="bg-violet-100">
                {passwordArray.map((item, idx) => {
                    return <tr key={idx}>
                        <td className="text-center w-30 py-2 px-2 border border-white">
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                                <a href={item.site} target="_blank" className="text-blue-600 text-xs sm:text-sm truncate max-w-[100px] sm:max-w-none">{item.site}</a>
                                <div onClick={()=>{copyText(item.site)}}>
                                <lord-icon
                                    style={{width: "16px", height: "16px"}}
                                    className="cursor-pointer size-4 sm:size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>
                        <td className="text-center w-30 py-2 px-2 border border-white">
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                                <span className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">{item.username}</span>
                                <div onClick={()=>{copyText(item.username)}}>
                                <lord-icon
                                    style={{width: "16px", height: "16px"}}
                                    className="cursor-pointer size-4 sm:size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>
                        <td className="text-center w-30 py-2 px-2 border border-white">
                             <div className="flex items-center justify-center gap-1 flex-wrap">
                                <span className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none">{"*".repeat(item.password.length)}</span>
                                <div onClick={()=>{copyText(item.password)}}>
                                <lord-icon
                                    style={{width: "16px", height: "16px"}}
                                    className="cursor-pointer size-4 sm:size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>

                        <td className="text-center w-30 py-2 px-2 border border-white">
                            <div className="flex items-center justify-center gap-1">
                                <span className='cursor-pointer mx-1' onClick={() => {editPassword(item.id)}}>
                                    <lord-icon
                                        style={{width: "16px", height: "16px"}}
                                        className="size-4 sm:size-5"
                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                        trigger="hover"
                                        ></lord-icon>
                                </span>
                                <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}} >
                                    <lord-icon
                                        style={{width: "16px", height: "16px"}}
                                        className="size-4 sm:size-5"
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        ></lord-icon>
                                </span>
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
        </div>
        </>
    )
}