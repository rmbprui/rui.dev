import ReactDOM from 'react-dom/client';

import "./css/styles.css"

// App
import App from './App';

// Providers
import MUIProvider from './providers/MUIProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MUIProvider>
    <App />
  </MUIProvider>
);
