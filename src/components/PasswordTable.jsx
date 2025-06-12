export default function PasswordTable({ passwordArray }) {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard");
    }

    return (
        <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className=" bg-violet-800 text-white">
                <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Passwords</th>
                </tr>
            </thead>
            <tbody className="bg-violet-100">
                {passwordArray.map((item, idx) => {
                    return <tr key={idx}>
                        <td className="text-center w-30 py-2 border border-white">
                            <div className="flex items-center justify-center gap-1">
                                <a href={item.site} target="_blank" className="text-blue-600">{item.site}</a>
                                <div onClick={()=>{copyText(item.site)}}>
                                <lord-icon
                                    style={{width: "20px", height: "20px"}}
                                    className="cursor-pointer size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>
                        <td className="text-center w-30 py-2 border border-white">
                            <div className="flex items-center justify-center gap-1">{item.username}
                                <div onClick={()=>{copyText(item.username)}}>
                                <lord-icon
                                    style={{width: "20px", height: "20px"}}
                                    className="cursor-pointer size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>
                        <td className="text-center w-30 py-2 border border-white">
                             <div className="flex items-center justify-center gap-1">{item.password}
                                <div onClick={()=>{copyText(item.password)}}>
                                <lord-icon
                                    style={{width: "20px", height: "20px"}}
                                    className="cursor-pointer size-7 px-1 py-0.5" 
                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                    trigger="hover"
                                    ></lord-icon>
                                </div>
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    )
}