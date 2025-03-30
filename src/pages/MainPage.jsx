import Header from '@components/Header'
import LastArticle from '@components/LastArticle'

function MainPage() {
    return (
        <>
        <Header />
        <div className="w-[80%] mx-auto px-12 mt-8">
        <LastArticle/>
        </div>
        </>
    )
}

export default MainPage