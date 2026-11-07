import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import About from './pages/About.jsx'
import Process from './pages/Process.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'industries', element: <Industries /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'portfolio/:slug', element: <ProjectDetails /> },
      { path: 'about', element: <About /> },
      { path: 'process', element: <Process /> },
      { path: 'contact', element: <Contact /> },
      { path: 'quote', element: <Quote /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
