import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <h3>
        {length} {length == 1 ? "Task" : "Tasks"}
      </h3>
    </footer>
  );
};

export default Footer;
