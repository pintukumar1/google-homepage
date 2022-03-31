import React from 'react'
import SearchBox from './components/SearchBox/SearchBox';
import GoogleLogo from './assets/images/GoogleLogo.png'

function App() {
  return (
    <div className="googleBox">
      <img src={GoogleLogo} alt="logo" />
      <SearchBox />
    </div>
  );
}

export default App;
