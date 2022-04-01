import React from 'react'
import SearchBox from './components/SearchBox/SearchBox';
import GoogleLogo from './assets/images/GoogleLogo.png'
import GoogleButton from './components/GoogleButton/GoogleButton';

function App() {
  return (
    <div className="googleBox">
      <img src={GoogleLogo} alt="logo" />
      <SearchBox />
      <div className="buttonBox">
        <GoogleButton text="Google Search"/>
        <GoogleButton text="I'm Feeling Lucky"/>
      </div>
    </div>
  );
}

export default App;
