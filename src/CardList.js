import React from 'react';
import Card from './Card'
function CardList() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Card />
        </div>
        <div className="col-sm-4">
          <Card />
        </div>
        <div className="col-sm-4">
          <Card />
        </div>
      </div>
    );
  }
  export default CardList