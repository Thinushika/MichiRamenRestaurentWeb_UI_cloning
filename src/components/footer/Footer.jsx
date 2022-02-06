import React, { useEffect } from "react";
import "./Footer.css";
import data from "./data.json";

function Footer() {
  return (
    <div className="Fcontainer">
      <div className="iconColumn">
        <div className="iconBox">
          <img src="./images/yelp.png" alt="yelp" />
        </div>
        <div className="iconBox">
          <img src="./images/twitter.png" alt="yelp" />
        </div>
        <div className="iconBox">
          <img src="./images/facebook.png" alt="yelp" />
        </div>
        <div className="iconBox">
          <img src="./images/instagram.png" alt="yelp" />
        </div>
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

      <div className="emptyColumn"></div>
    </div>
  );
}

export default Footer;
