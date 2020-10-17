import React from 'react'
import './review.css';
export default function Reviews(props) {
    return (
      <>
        <div className="customer-review-container">
          <div className="customer-main-content">
            <p className="review-title">Customer Review</p>
            <hr />
            <React.Fragment>
              <small>{(((props||{}).product||{}).reviews||[])[0].review}</small>
            </React.Fragment>
            <br />
            <br />
            By{" "}
            <React.Fragment>
              <i>{(((props||{}).product||{}).reviews||[])[0].customer}</i>
              <span id="heart"></span>
            </React.Fragment>
          </div>
        </div>
        <div className="product-retailer-container">
          <div className="product-main-content">
            <p className="review-title">Product Retailer</p>
            <hr />
            <React.Fragment>
              <small>
                {(((props||{}).product||{}).details||[]).map((detail, idx) => (
                  <span key={idx}>{detail}</span>
                ))}
              </small>
            </React.Fragment>
            <br />
            <br />
            By{" "}
            <React.Fragment>
              <i>{((props||{}).product||{}).brand}</i>
            </React.Fragment>
          </div>
        </div>
      </>
    );
}
