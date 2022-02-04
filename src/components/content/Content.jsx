import React from 'react';
import "./Content.css";

function Content() {

  return (
    <div className='Ccontainer'>
      <section className="Mrow">
        <div className="flexBox">
          <div className="Box">
            <center><img src="https://michiramen.com/img/logo_trans.gif" alt="logo" /></center>
            <br/>
            <center><h2 className='h2Topic'>Please select your store</h2></center>
            <center><p>Extra charge for remaking orders placed at wrong location</p></center>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
