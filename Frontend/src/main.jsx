import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Add your routes here */}
      <Route path='/' element={<Home />} />
      <Route path='create-book' element={<CreateBook />} />
      <Route path='edit-book/:id' element={<EditBook />} />
      <Route path='show-book/:id' element={<ShowBook />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
