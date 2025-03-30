import { useState, useContext } from 'react'
import { UseModalContext } from "@context/UseModal"
import { Link } from "react-router"

function Header() {
    const { openModal } = useContext(UseModalContext)
    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode =  () => {
        let darkMode = document.querySelector('html')
        darkMode.classList.toggle('dark')
        if (darkMode.classList.contains('dark')) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
        console.log(darkMode)
    }

    return (
        <>
        <header className="w-full h-16.5 flex justify-around items-center text-[var(--dark-blue-primary)] dark:text-[var(--light-gray-dark-mode)] transition-colors duration-300">
            <Link to="/">
            <div className="flex items-center w-max header-left h-max">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[var(--yellow-gold)] w-[54px] h-[46px]" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.06 29.06 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.06 29.06 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.06 29.06 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640z"/><path fill="currentColor" d="M768 192H128v448h640zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.06 29.06 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.06 29.06 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.06 29.06 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.06 29.06 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"/><path fill="currentColor" d="M448 576a160 160 0 1 1 0-320a160 160 0 0 1 0 320m0-64a96 96 0 1 0 0-192a96 96 0 0 0 0 192"/></svg>
                <h1 className="text-4xl">WalletWise</h1>
            </div>
            </Link>
            <div className="header-right">
                <ul className="flex items-center">
                    <li className="navBar"><Link to="/">Inicio</Link></li>
                    <li className="navBar"><Link to="/">Artículos</Link></li>
                    <li className="navBar"><Link to="/">Categorías</Link></li>
                    <li className="navBar"><Link to="/">Sobre Mí</Link></li>
                    <li className="navBar"><Link to="/">Contacto</Link></li>
                    <li className="cursor-pointer" onClick={handleDarkMode}>                
                    { !darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" className="max-[30rem]:hidden" fillRule="evenodd" d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802M1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12" clipRule="evenodd"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" className="max-[30rem]:hidden"  d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"/></svg>                
                    ) }
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={openModal} width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" className="cursor-pointer" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header