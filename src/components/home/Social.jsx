import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://mobile.twitter.com/muath_online"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://github.com/JustMuath1"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://wa.me/966556297083"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
