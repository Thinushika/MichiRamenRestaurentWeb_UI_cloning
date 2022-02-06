import React from "react";
import "./Content.css";
import details from "./details.json";

function Content() {
  return (
    <>
      <div className="addressContainer">

        <div className="logoContainer">
          <div className="logo">
            <img src="https://michiramen.com/img/logo_trans.gif" alt="logo" />
          </div>
            <div>
            <h2 className="Mh2tag">Please Select Your Store</h2>
            <p className="Mptag">Extra charge for remaking orders placed at wrong location</p>
            </div>
        </div>

        <div className="boxA">
            {details.map((post) => {
              return (
                <div className="BoxC">
                  <h2 className="h2Design">{post.title}</h2>
                  <div className="btnDiv"><button className="btn">Menu/Order</button></div>
                  <p className="pDesign">
                    <u>Address</u> <br />
                    {post.addressline1} <br />
                    {post.addressline2} <br />
                    {post.addressline3}
                  </p>
                  <p className="pDesign">
                    <u>Phone Number</u> <br />
                    {post.phoneNo}
                  </p>
                  <p className="pDesign">
                    <u>Hourse of Operation</u> <br />
                    Open Daily <br />
                    11 am - 10 pm
                  </p>
                  <p className="pDesign">
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
