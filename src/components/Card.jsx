import { useRef } from 'react'
import { Link } from 'react-router-dom';

function Card({ link, title, date, summary }) {
    const arrowRef = useRef(null);

    return (
        <>
        <Link to={link}>
        <div className="flex flex-col gap-2 h-full card">
            <div className="w-full card-image">
                <div className="w-[330px] h-[275px] image bg-neutral-400"></div>
            </div>
            <div className="card-text">
                <div className="card-header">
                    <h2 className="text-2xl font-bold dark:text-[var(--light-blue-dark-mode)] transition-colors duration-300">{title}</h2>
                </div>
                <div className="card-date">
                    <p className="text-[var(--light-gray)] my-1 dark:text-neutral-500 transition-colors duration-300">{date}</p>
                </div>
                <div className="card-summary">
                    <p className="dark:text-[var(--light-gray-dark-mode)] transition-colors duration-300">{summary}</p>
                </div>
                <div className="flex justify-end items-center pr-6 mt-5 w-full card-button card-read-more">
                    <button onMouseEnter={() => {
                        arrowRef.current.classList.add('animate-arrow')
                    }} onMouseLeave={() => {
                        arrowRef.current.classList.remove('animate-arrow')
                    }} className="bg-none rounded-full border-none cursor-pointer text-[var(--yellow-gold)] font-bold flex items-center justify-center text-xl gap-1">Read More <svg ref={arrowRef} className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg></button>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default Card;