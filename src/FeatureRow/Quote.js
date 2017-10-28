import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'

export default class Quote extends Component {
  //<Button as='a' size='large'>I'm Still Quite Interested</Button>
  render () {
    let buttonHTML = (this.props.link) ? <Button link={this.props.link}>Learn more</Button> : '';
    
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
              <Header as='h3' style={{ fontSize: '2em' }}>{this.props.header}</Header>
              <div style={{ fontSize: '1.33em' }}>
                {this.props.content}
              </div>
              {buttonHTML}
            </Container>
          </Segment>
        );
    }
}