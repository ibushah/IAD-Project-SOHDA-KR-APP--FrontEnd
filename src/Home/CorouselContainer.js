import React, { Component } from 'react';
import './CorouselStyle.css';
import Corousel from './Corousel';
import { Button } from 'antd';
import img from '../assets/car.png'
import phone from '../assets/smartphone.png'
import tv from '../assets/tv.png'
import plot from '../assets/land.png'
import bike from '../assets/motorcycle.png'
import access from '../assets/consumer.png'

const tileData = [
  {
    index: 0,
    picture: img,
    title: 'Cars'
  },
  {
    index: 1,
    picture: phone,
    title: 'Phones'
  },
  {
    index: 2,
    picture: tv,
    title: 'Television'
  },
  {
    index: 3,
    picture: plot,
    title: 'Plots'
  },
  {
    index: 4,
    picture: access,
    title: 'Accessories'
  },
  {
    index: 5,
    picture: bike,
    title: 'MotorCyles'
  }
];


// class component
class CorouselContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: tileData,
      property: tileData[2]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: tileData[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property:  tileData[newIndex]
    })
  }

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App" style={{ top: '20px' }}>


        <Button
          onClick={() => this.prevProperty()}
          style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
          disabled={property.index === 0}
        >Prev</Button>
        <Button
          onClick={() => this.nextProperty()}
          style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}
          disabled={property.index === tileData.length - 1}
        >Next</Button>

        <div className="page">


          <div style={{ marginTop: '20px' }} className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${property.index * (100 / properties.length)}%)`
              }}>
                {
                  properties.map((property, index) => <Corousel key={index} property={property} />)
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CorouselContainer;
