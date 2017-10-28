import React, { Component } from 'react';
import { Card, Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'
import CarouselGrid from './Grid'

export default class CarouselGridRow extends Component {
  render () {
    let gridEls = [
      {
        img: 'https://satinflame.com/img/stock/stock001.jpg',
        content: 'Mew mew mewMew mew mewMew mew mewMew mew mewMew mew mewMew mew mew'
      },{
        img: 'https://satinflame.com/img/stock/stock002.jpg',
        content: 'Mew mew mew'
      },{
        img: 'https://satinflame.com/img/stock/stock003.jpg',
        content: 'Mew mew mew'
      },{
        img: 'https://satinflame.com/img/stock/stock004.jpg',
        content: 'Mew mew mew'
      }
    ];
    let gridCols = [];
    gridEls.map((e, i)=> {
     gridCols.push(<CarouselGrid {...e}/>)
    })
    return (
      <Grid padded relaxed="very">
            <Grid.Row columns={4}>
      {gridCols}
    </Grid.Row>
      </Grid>
    );
  }
}