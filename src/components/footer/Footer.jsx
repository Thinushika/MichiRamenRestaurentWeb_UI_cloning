import React, { useEffect } from "react";
import "./Footer.css";
import data from "./data.json";

function Footer() {
  return (
    <div className="Fcontainer">
      <div className="iconColumn">
        <ul>
          <li className="yelp">
            <a href="#" className="ir"></a>
            </li>
            <li className="twitter">
            <a href="#" className="ir"></a>
            </li>
            <li className="facebook">
            <a href="#" className="ir"></a>
            </li>
            <li className="instagram">
            <a href="#" className="ir"></a>
            </li>
        </ul>
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
        <p className="detailsTerms">Terms of Use</p>
      </div>
    </div>
  );
}

export default Footer;
