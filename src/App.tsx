import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import SelectPlayer from './pages/SelectPlayer/SelectPlayer';

function App() {
  return (
    <>
      <a className="github-link" href="https://github.com/bncunha/ps5-ui" target="_blank" rel="noreferrer">
        <img src="https://pngimg.com/uploads/github/github_PNG83.png" alt="GitHub"/>
      </a>
      <SelectPlayer></SelectPlayer>
    </>
  );
}

export default App;
