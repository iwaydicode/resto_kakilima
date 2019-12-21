import React from 'react';
import mainImage from '../assets/images/aneka-makanan.jpg';

const AboutCard = () => (
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-3 mb-3 text-center">
              
              <div className="card-body">
                <img src={mainImage} width="100%" height="200px" alt="aneka-makanan"></img>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mt-3 mb-3 text-justify">
              
              <div className="card-body">
                <h4 className="card-title">About Resto Kaki Lima</h4>
                <p className="card-text">
                    Resto KakiLima is one of the restaurants that provides street food with 5-star services and has branches in 3 major cities, namely Jakarta, Bandung and Bali. Through this application you can see many food reviews from all over the city as a reference before going to the Resto KakiLima.
                </p>
              </div>
            </div>
          </div>
        </div>
)

export default AboutCard;