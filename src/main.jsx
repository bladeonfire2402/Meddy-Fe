import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import { ThemeProvider } from '@emotion/react';
import NewscontextProvider from './context/NewsContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ThemeProvider theme={{}}> {/* Empty object as theme */}
        <NewscontextProvider>
        <App />
        </NewscontextProvider>
      </ThemeProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
