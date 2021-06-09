import Spacer from "./Spacer";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import EmailLogo from "../images/email.png";
import LinkedInLogo from "../images/linkedin.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            fontSize: "20pt",
            height: "50px",
            textAlign: "center",
            width: "300px",
            lineHeight: "50px",
            backgroundColor: "#7FB3D5",
            borderRadius: "10px",
            color: "white",
          }}
        >
          CONTACT ME
        </div>
        <Spacer type="column" size="xxlarge" />
        <img alt="Email Logo" width="40px" height="35px" src={EmailLogo} />
        <Spacer type="column" size="large" />
        <a href="mailto:tanya.tang56@gmail.com">tanya.tang56@gmail.com</a>
        <Spacer type="column" size="xxlarge" />
        <GithubLogo style={{ width: "40px", height: "40px" }} />
        <Spacer type="column" size="large" />
        <a href="https://github.com/tangtan2">tangtan2</a>
        <Spacer type="column" size="xxlarge" />
        <img
          alt="LinkedIn Logo"
          width="40px"
          height="37px"
          src={LinkedInLogo}
        />
        <Spacer type="column" size="large" />
        <a href="https://www.linkedin.com/in/tanya-t-50801881/">Tanya Tang</a>
      </div>
    </div>
  );
};

export default Footer;
