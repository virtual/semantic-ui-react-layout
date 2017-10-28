import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'




export default class Jumbotron extends Component {
 

  render() { 

    return (
        <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}