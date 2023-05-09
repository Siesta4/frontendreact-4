import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";

function Footer() {
    return (
      <div className="wrapper">
        <FooterLogo/>
        <FooterMenu/>
        <Copyright/>
      </div>
    );
  }
  
  export default Footer;