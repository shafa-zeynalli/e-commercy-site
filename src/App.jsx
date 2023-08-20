import React from 'react';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Pagination from './components/Pagination';
import RootLayout from './components/RootLayout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route
            path="/"
            element={<Card />}
          />
           
            <Route
              path="/blogs"
              element={<Pagination />}
            />
          
        </Routes>
        </RootLayout>
      </BrowserRouter>

    </div>
  );
};

export default App;
