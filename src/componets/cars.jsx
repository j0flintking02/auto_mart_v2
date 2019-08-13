import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCars } from '../actions/carsAction'


class CarsView extends Component {
   componentDidMount() {
       this.props.fetchCars()
   }
    render() {
       const  raw_data = this.props.raw_data;
        let content
        const cars = raw_data.data
        if (cars.length === 0) {
            content = 'NO CONTENT TO DISPLAY';
          }
        console.log(cars);
        content = cars.map(car => (
            <div key={car.carid}>
              <ul>
                  <li>
                    <h2>{car.model}</h2>
                    <p>
                        {car.manufacturer}
                    </p>
                  </li>
              </ul>
            </div>
          ));
      return (
          <div>
              {content}
          </div>
      );
    }
  }
  CarsView.propTypes = {
    fetchCars: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    raw_data: state.data,
  });

  export default connect(mapStateToProps, { fetchCars })(CarsView);