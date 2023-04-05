import { Fragment } from "react";

function Footer() {
  return (
    //add fragment to avoid error
    <Fragment>
      <a href="https://www.linkedin.com/in/li-qiyin-339197168/">
        <h3>Linkedin: Kiaruh</h3>
      </a>
      <a href="https://github.com/kiaruh/pickleli-app">
        <h3>Github: Kiaruh</h3>
      </a>
    </Fragment>
  );
}

export default Footer;
