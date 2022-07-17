import React from "react";

export const Order = () => {
  return (
    <section className="container">
      <div className="container__card">
        <h1> Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="container__price">
          <p>Annual Plan</p>
          <p> $59.99/year</p>
          <ul>
            <li>change</li>
          </ul>
        </div>
        <div className="container__btn">
          <button> Proceed to Payment</button>
        </div>
      </div>
    </section>
  );
};
