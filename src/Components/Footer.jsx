import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {

  const githubUrl = () => {
    window.open('https://github.com/SoumyaEXE/AnimeTrix')
  }

  const instagramUrl = () => {
    window.open('https://www.instagram.com/s0umy4_xD/')
  }

  return (
    <div className="footer">
      <h1>
        <span className="white">Anime</span>Zen
      </h1>
      <p className="footer-about">
AnimeZen is not affiliated with or endorsed by any of the anime studios
        behind the creation of the anime presented on this site.A heartfelt thank you to the creators (🔥Shiva Bhattacharjee & Dark-Knight❤) for bringing this stunning website to life. I (🔥Soumyadeep Dey❤) am committed to enhancing its beauty and user experience even further. 
This website is
        only an user interface presenting/linking various self-hosted files
        across the internet by other third-party providers for easy access.
        AnimeZen never downloads the video from any source provider, link will
        be returned from the response hence it is completely not subjected to
        DMCA compliant.
      </p>
      <div className="footer-social">
        <button onClick={() => instagramUrl()}>
          <InstagramIcon />
        </button>
        <button onClick={() => githubUrl()}>
          <GitHubIcon />
        </button>
      </div>
 <p className="footer"> <h6>Ⓒ 2023-2024 Soumyadeep Dey</h6> </p>
     </div>
  );
}
export default Footer;