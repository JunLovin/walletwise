import MainPage from '@pages/MainPage'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Outlet, useLocation } from 'react-router'

function App() {
  const location = useLocation()
  const mainPage = location.pathname === '/'


  return (
    <>
    <Header />
    <Outlet />
    {mainPage && <MainPage />}
    <Footer />
    </>
  )
}

export default App
