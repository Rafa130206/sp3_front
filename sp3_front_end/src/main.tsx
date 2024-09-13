import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routes/Home/Home.tsx'
import Cadastro from './Routes/Cadastro/Cadastro.tsx'
import Servicos from './Routes/Servicos/Servicos.tsx'
import Integrantes from './Routes/Integrantes/Integrantes.tsx'
import Contato from './Routes/Contato/Contato.tsx'
import Error from './Routes/Error/Error.tsx'


const routes = createBrowserRouter([
  {
    path:"/", element:<App/>, errorElement:<Error/>, children:[
      {path:"/", element:<Home/>},
      {path:"/cadastro", element:<Cadastro/>},
      {path:"/servicos", element:<Servicos/>},
      {path:"/integrantes", element:<Integrantes/>},
      {path:"/contato", element:<Contato/>}
    ]
  }])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
