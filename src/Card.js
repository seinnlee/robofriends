import React from 'react';

const Card = (props) => {
  const {name, email, id} = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}`}/>
      <div>
        <h2>{name}</h2> {/* This is JS expression so it needs to be wrapped in curly brackets*/}
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;