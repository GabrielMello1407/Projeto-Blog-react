import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'
//Páginas
import Home from './routes/Home.jsx'
import NewPosts from './routes/NewPosts.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/new",
        element:<NewPosts/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
