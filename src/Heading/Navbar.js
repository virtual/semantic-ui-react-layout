import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'
import Jumbotron from './Jumbotron';

const FixedMenu = () => (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item as='a'>Work</Menu.Item>
        <Menu.Item as='a'>Company</Menu.Item>
        <Menu.Item as='a'>Careers</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item className='item'>
            <Button as='a'>Log in</Button>
          </Menu.Item>
          <Menu.Item>
            <Button as='a' primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )

export default class Navbar extends Component {
    state = {}
    
      hideFixedMenu = () => this.setState({ visible: false })
      showFixedMenu = () => this.setState({ visible: true })
    
      render() { 
            const { visible } = this.state
        return (
            <div>
            { visible ? <FixedMenu /> : null }
    
            <Visibility
              onBottomPassed={this.showFixedMenu}
              onBottomVisible={this.hideFixedMenu}
              once={false}
            >
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item position='right'>
                      <Button as='a' inverted>Log in</Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Menu.Item>
                  </Menu>
                </Container>
    
                <Jumbotron />
              </Segment>
            </Visibility>
            </div>
        
        );
    }
}