import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';

export default function App() {
  const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}