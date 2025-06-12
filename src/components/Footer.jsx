export default function Footer() {
    return (


        <footer className="bg-white rounded-lg shadow-sm m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Created with <img className="inline-block" src="/heart.png" width={15} /> by <a href="https://github.com/lsahmed" className="hover:underline">Ahmed</a></span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 gap-6 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://x.com/ethanradnor" target="_blank" className="hover:underline me-4 md:me-6"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 50 50">
                            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                        </svg></a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/lsahmed" target="_blank" className="hover:underline me-4 md:me-6"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg></a>
                    </li>
                    <li>
                        <a href="https://lsahmed.tech" target="_blank" className="hover:underline me-4 md:me-6"><img width={20} src="/web.svg" alt="porfolio" /></a>
                    </li>
                    <li>
                        <a href="mailto:md.ahmed701153@gmail.com" target="_blank" className="hover:underline me-4"><img width={20} src="/email.svg" alt="mail me" /></a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}