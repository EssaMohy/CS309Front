import React from 'react';
import './App.css';
import Topbar from './componants/topbar/topbar';
import Newm from './componants/newM/newM';
import Newproduct from './newproduct/newproduct';
import Product from './componants/product/product';

function App() {
  return (
    <div className="container">
      <Topbar />
      <div className='newm'>
      <Newm />
      </div>
      <div className='craete'>
      <Newproduct />
      </div>
      <div className='prod'>
        <Product />
      </div>
    </div>
  );
}

export default App;
