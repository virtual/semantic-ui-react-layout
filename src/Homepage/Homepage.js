import React, {Component} from 'react';
import Quote from '../FeatureRow/Quote';
import Features from '../FeatureRow/Features';
import CarouselGridRow from '../Carousel/GridRow';

export default class Homepage extends Component {
  render() {
    return (
      <main>
        <Quote 
          header="Creative works to inspire the next generation" 
          content={
            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Dolore magna aliqua orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>} 
          link="https://react.semantic-ui.com/views/card#card-example-header-card" />
        <Features/>
        <Quote 
          header="We go the extra mile" 
          content={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>} />
          <CarouselGridRow/>
      </main>
    );
  }
}