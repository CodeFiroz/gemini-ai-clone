import React from 'react';
import Main from './component/Main';
import Sidebar from './component/Sidebar';
import './index.css';

function App() {
  return (
    <div className="body-wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
