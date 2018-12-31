import React, { Component } from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../info/tourData';



export default class TourList extends Component {
  state={
    tours: tourData
  };
  removeTour = (id) =>{
    const {tours} = this.state;
    const storedData = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: storedData
    })
  };
  render() {
    const { tours } = this.state;
    return (
        <section className="tourlist">
            {tours.map(tour => { 
              return <Tour key={tour.id} tour={tour}  removeTour={this.removeTour}/>
            })}
        </section>
    )
  }
}
