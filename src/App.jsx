
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experince from './Components/Experince/Experince'
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routes = createBrowserRouter([{
    path:"/", 
    element:<MasterLayout/>,
    children:[
      {
        index:true, 
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"experince",
        element:<Experince/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"work",
        element:<Work/>
      }
  ]
  }])

  return (
    <>
      <RouterProvider router={routes} ></RouterProvider>
    
    </>
  )
}

export default App
