import React from "react";
import ReactDOM from "react-dom";
import FaFacebook from "/fa/facebook";
import Twitter from "/fa/twitter";
import Google from "/fa/google";
import { ShareButton } from "react-custom-share";

const App = props => {
  const shareButtonProps = {
    url: "https://facebook.com",
    network: "Facebook",
    text: "Give it a try",
  };

  return <ShareButton {...shareButtonProps}>
    < FaFacebook />
  </ShareButton>;
};

const App = props => {
  const shareButtonProps = {
    url: "https://twitter.com",
    network: "Twitter",
    text: "Give it a try",
  };

  return <ShareButton {...shareButtonProps}>
    < Twitter />
  </ShareButton>;
};

const App = props => {
    const shareButtonProps = {
      url: "https://google.com",
      network: "Google",
      text: "Give it a try",
    };
  
    return <ShareButton {...shareButtonProps}>
      < Google />
    </ShareButton>;
  };

ReactDOM.render(<App />, document.getElementById("root"));