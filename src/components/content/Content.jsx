import React from "react";
import "./Content.css";
import details from "./details.json";

function Content() {
  return (
    <>
      <div className="addressContainer">

        <div className="logoContainer">
          Logo
        </div>

        <div className="boxA">
            {details.map((post) => {
              return (
                <div className="BoxC">
                  <h2>{post.title}</h2>
                  <p>
                    <u>Address</u> <br />
                    {post.addressline1} <br />
                    {post.addressline2} <br />
                    {post.addressline3}
                  </p>
                  <p>
                    <u>Phone Number</u> <br />
                    {post.phoneNo}
                  </p>
                  <p>
                    <u>Hourse of Operation</u> <br />
                    Open Daily <br />
                    11 am - 10 pm
                  </p>
                  <p>
                    <u>Services</u> <br />
                    Take-Out <br />
                    3rd-party Delivery
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Content;
