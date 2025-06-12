import React from "react";

export default function PasswordTable() {
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
                    <tr>
                        <td className="text-center w-30 py-2 border border-white">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="text-center w-30 py-2 border border-white">Malcolm Lockyer</td>
                        <td className="text-center w-30 py-2 border border-white">1961</td>
                    </tr>
                    <tr>
                        <td className="text-center w-30 py-2 border border-white">Witchy Woman</td>
                        <td className="text-center w-30 py-2 border border-white">The Eagles</td>
                        <td className="text-center w-30 py-2 border border-white">1972</td>
                    </tr>
                    <tr>
                        <td className="text-center w-30 py-2 border border-white">Shining Star</td>
                        <td className="text-center w-30 py-2 border border-white">Earth, Wind, and Fire</td>
                        <td className="text-center w-30 py-2 border border-white">1975</td>
                    </tr>
                </tbody>
            </table>
    )
}