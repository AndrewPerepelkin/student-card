import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentCardPage from './layouts/StudentCardPage';
import EditCardPage from './layouts/EditCardPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<StudentCardPage />} />
        <Route path='/edit' element={<EditCardPage />} />
      </Routes>
  );
}

export default App;
