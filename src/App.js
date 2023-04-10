import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';


function App() {
  return (
    <div className="mx-auto" style={{overflow : 'auto'}}>
      <Header />  
      <MainSection />
    </div>
  );
}

export default App;
