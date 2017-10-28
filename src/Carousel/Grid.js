import React, { Component } from 'react';
import { Card, Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'

export default class CarouselGrid extends Component {
  render () {
    let background = {
      backgroundImage: "url(" + this.props.img +")",
      backgroundSize: "cover"
    }
    return (

      <Grid.Column color="black" style={background} padded>

      <Header as='h3'>
           
        {this.props.content}
            <Header.Subheader>
            
        {this.props.content}
            </Header.Subheader>
          </Header>
          
      </Grid.Column>
       
    );
  }
}