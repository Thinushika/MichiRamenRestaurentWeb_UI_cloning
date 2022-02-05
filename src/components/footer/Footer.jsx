import React, { useEffect } from "react";
import "./Footer.css";
import data from "./data.json";

function Footer() {
  return (
    <div className="Fcontainer">
      <div className="iconColumn">
        <div className="iconBox"></div>
      </div>

      <div className="detailsColumn">
        {data.map((post) => {
          return (
            <>
              <p className="details">
                {post.location} . Take-out & Delivery <br />
                {post.contactNo} . {post.address}
              </p>
            </>
          );
        })}
      </div>

      <div className="emptyColumn"></div>
    </div>
  );
}

export default Footer;
