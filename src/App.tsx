import React, { FC } from 'react';
import Layout from './hoc/Layout';
import Auth from './components/Auth/Auth';
import Contacts from './components/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
