import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './fonts.css'

/* Browser Routers */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Pages */
import Page from './pages/Page'
import ErrorPage from './pages/Error'

/* Router instance */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
