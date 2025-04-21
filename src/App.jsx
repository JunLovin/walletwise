import MainPage from '@pages/MainPage'
import Header from '@components/Header'
import { Outlet, useLocation } from 'react-router'

function App() {
  const location = useLocation()
  const mainPage = location.pathname === '/'


  return (
    <>
    <Header />
    <Outlet />
    {mainPage && <MainPage />}
    </>
  )
}

export default App
