import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
