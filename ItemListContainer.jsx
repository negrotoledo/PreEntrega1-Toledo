import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title">{props.greeting}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
