import React from 'react';
import ReactDOM from 'react-dom';

function Card() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{width:"18rem"}}>
                    <img src="https:" className="card-img-top" alt="..."/>
              <div className="card-body">
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;


