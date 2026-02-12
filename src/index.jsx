import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Bounce, ToastContainer } from 'react-toastify';

import "./libs/tailwind.js";

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = createRoot(rootEl);

  root.render(
    <StrictMode>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />
    </StrictMode>,
  );
}
