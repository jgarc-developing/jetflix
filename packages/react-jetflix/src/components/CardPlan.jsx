import React from "react";
import PropTypes from 'prop-types';

const CardPlan = ({ plan }) => {
  return (
    <div className="card">
      <img className="card-img" src={plan.img}
        alt="image">
      </img>
      <div className="card-body">
        <div className="card-title" color="gray">{plan.title}</div>
        <div className="card-description">
          <ul>
            { plan.description.map((item) => (
              <li key={item}>{item}</li>
            )) }
          </ul>
        </div>
      </div>
      <a href="#" className="btn-buy-plan">
        { plan.price }</a>
    </div>
  );
}

CardPlan.propTypes = {plan: PropTypes.any}
export default CardPlan;