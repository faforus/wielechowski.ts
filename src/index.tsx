import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error('Could not find root element');
}
