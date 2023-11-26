import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListStudent from './page/ListStudent';
import StudentCreate from './page/createStudent';

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<ListStudent/>}></Route>
      <Route path="/create" element={<StudentCreate/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;