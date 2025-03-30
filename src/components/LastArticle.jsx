import { Link } from 'react-router-dom'

function LastArticle() {
    return (
        <>
        <div className="last-article flex flex-col gap-8">
            <h2 className="font-bold text-7xl text-[var(--dark-blue-primary)] dark:text-[var(--light-blue-dark-mode)] transition-colors duration-300">Último artículo</h2>
            <Link to="/">
            <div className="last-article-container h-[350px] flex justify-around gap-12">
                <div className="last-article-left w-[625px] h-full">
                    <div className="image w-full h-full bg-neutral-400"></div>
                </div>
                <div className="last-article-right flex flex-col gap-2">
                    <h3 className="text-[var(--yellow-gold)] text-6xl font-bold max-w-[15ch] leading-normal">Lorem ipsum dolor sit amet</h3>
                    <p className="text-[var(--light-gray)] font-semibold dark:text-neutral-500 transition-colors duration-300">Marzo 29, 2025</p>
                    <p className="max-w-[60ch] font-medium leading-normal dark:text-[var(--light-gray-dark-mode)] transition-colors duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque consequatur numquam a voluptatem aut nostrum in, quo voluptate esse magnam animi expedita assumenda. Impedit beatae aspernatur explicabo distinctio voluptatum.</p>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
}

export default LastArticle