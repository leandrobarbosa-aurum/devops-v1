import './App.css';
import React from 'react';

const MFE1Button = React.lazy(
  () => import('MFE1/Button')
);

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div style={{ border: "dotted red" }}>
        <React.Suspense fallback='Loading Button'>
          <MFE1Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
