import React from "react";
import iconMusic from "./assets/images/icon-music.svg";

export const Order = () => {
  return (
    <section className="container">
      <div className="container__card">
        <div className="container__card--text">
          <h1> Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div className="container__price">
          <img src={iconMusic} alt="icon-music" />
          <div className="container__price--plan">
            <h1>Annual Plan</h1>
            <p> $59.99/year</p>
          </div>
          <ul>
            <li>change</li>
          </ul>
        </div>
        <div className="container__btn">
          <button className="btn"> Proceed to Payment</button>
        </div>
        <h2>cancel order</h2>
      </div>
    </section>
  );
};
