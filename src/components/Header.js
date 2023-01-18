import { useState } from "react";
const Header = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="header" key="d1">
      <img
        src="https://content3.jdmagicbox.com/comp/navi-mumbai/l4/022pxx22.xx22.180901093644.i4l4/catalogue/khao-piyo-sojao-nerul-navi-mumbai-home-delivery-restaurants-j7ab4cza91.jpg"
        alt="logo"
      />
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      {isloggedin ? (
        <button className="Log-in" onClick={() => setIsLoggedIn(false)}>
          Log In
        </button>
      ) : (
        <button className="Log-out" onClick={() => setIsLoggedIn(true)}>
          Log Out
        </button>
      )}
    </div>
  );
};
export default Header;
