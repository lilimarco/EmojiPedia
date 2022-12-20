import React from "react";

function Emojidictionary(props) {
  return (
    <div  className="dictionary">
      <dl>
        <div className="term">
          <dt>
            <img className="emoji" src={props.image} alt="flexedbicepts" />
            <h2>{props.name}</h2>
          </dt>
          <dd className="dictionarydata">{props.data}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Emojidictionary;
