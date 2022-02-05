import React from "react";
import "./Content.css";
import details from "./details.json";

function Content() {
  return (
    <>
      {details.map((post) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  );
}

export default Content;
