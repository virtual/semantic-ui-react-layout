import React, {Component} from 'react';
import IconCard from './IconCard';
import { Card, Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'

export default class Features extends Component {
  render() {
    const features = [
      {
        icon: 'video camera',
        title: 'Innovative',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
      },
      {
        icon: 'paint brush',
        title: 'Creative',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        icon: 'university',
        title: 'Accredited',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'
      }
    ];
    const featuresHTML = [];
    features.map((e, i)=>{
      featuresHTML.push(<IconCard {...e} key={i} />);
    })
    return (
      <Container>
     <Card.Group itemsPerRow="3" stackable >
       {featuresHTML}
     </Card.Group>
     </Container>
    );
  }
}