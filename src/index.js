import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicButtons from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flexBox'>
    <BasicButtons text="Click Me" variant="contained" size="large" bgColor="black" hColor="grey"/>
    <BasicButtons text="Click Me" variant="contained" size="medium" color="success"/>
    <BasicButtons text="Click Me" variant="contained" size="small" color="secondary"/>
  </div>
  
);
