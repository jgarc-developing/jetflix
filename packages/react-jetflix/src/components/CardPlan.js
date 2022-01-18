import React from "react";

class CardPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButton = (input) => {
    console.log("Click")
  }

  render() {
    let plan = this.props.plan;
    return (
      <div className="card">
        <img className="card-img" src={plan.img}
          alt="image">
        </img>
        <div className="card-body">
          <div className="card-title" color="gray">{plan.title}</div>
          <div className="card-description">
             <ul>
                {plan.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
          </div>
        </div>
        <a href="#" onClick={this.handleButton()} className="btn-buy-plan">
                         {plan.price}</a>
      </div>
    );
  }
}

export default CardPlan;