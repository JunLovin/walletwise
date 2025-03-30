import Header from '@components/Header'
import LastArticle from '@components/LastArticle'
import CardsContainer from '@components/CardsContainer'

function MainPage() {
    return (
        <>
        <div className="w-[80%] mx-auto px-12 mt-8 mb-12">
        <LastArticle />
        <CardsContainer />
        </div>
        </>
    )
}

export default MainPage