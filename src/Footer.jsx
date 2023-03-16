import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length} {length == 1 ? "Task" : "Tasks"}
    </footer>
  );
};

export default Footer;
