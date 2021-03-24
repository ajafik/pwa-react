import React from 'react';
import styled  from 'styled-components';
import logo from '../GitHub-Mark-Light-64px.png';
import './App.css';
import Header from '../components/Header/Header';

import Profile from './Profile';


const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header logo={logo} />
      <Profile />   
    </AppWrapper>
  );
}

export default App;
