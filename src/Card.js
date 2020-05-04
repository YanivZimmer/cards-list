import React from 'react';

function Card(props) {
    return (
      <div className="card">
        <img className="card-img-top"
             src="https://via.placeholder.com/600x250.png" 
             alt="cap image" />
        <div className="card-body">
          <h5 className="card-title">Title Placeholder</h5>
          <p className="card-text">Description Placeholder</p>
          <a href="#" className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
}
export default Card