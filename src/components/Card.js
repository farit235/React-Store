import React from "react";

export default function Card() {
  return (
    <div className="align">
      <div className="grid-align-item">
        <h2>Enter your payment information below</h2>

        <div className="card-box">
          <form action="" method="post" className="form">
            <div className="card">
              <header className="card-header">
                <h3 className="card-title">Payment Details</h3>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="visa"
                />
              </header>
              <div className="card-number form-field">
                <label htmlFor="card-number" className="card-number-label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="card-number-input"
                  placeholder="4000 1234 5678 9010"
                  pattern="[0-9]{13,16}"
                  required
                />
              </div>

              <div className="card-expiration form-field">
                <label htmlFor="card-expiration-year">Expiration</label>
                <select name="" id="card-expiration-year" required>
                  <option value="january">January</option>
                  <option value="februrary">Februrary</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>

                <select name="" id="" required>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              <div className="card-ccv form-field">
                <label htmlFor="">CVV</label>
                <input
                  type="text"
                  className="card-cvv-input"
                  placeholder="583"
                  pattern="[0-9]{3}"
                  required
                />
              </div>
            </div>
            <button className="card-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
