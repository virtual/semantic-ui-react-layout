import React, { Component } from 'react';
import { Card, Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'

export default class IconCard extends Component {
  constructor() {
    super(); 
  }
  render () {
  
  
    return (
      <Card>
      <Header as='h2' icon>
      <Icon name={this.props.icon}/>
      {this.props.title}
      <Header.Subheader>
      {this.props.text}
      </Header.Subheader>
    </Header>
    </Card>
    );
  }
}