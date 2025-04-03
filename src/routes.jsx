import App from './App'
import Contact from '@components/Contact'

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/contacto',
                element: <Contact />
            },
        ]
    },
]

export default routes