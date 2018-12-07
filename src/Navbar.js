import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import hades from './hades.png';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        
        <Menu inverted pointing secondary>
          <img width="100" height="50" src={hades} alt="Hades icon"/>
            

          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item
            name='Team'
            active={activeItem === 'Roster'}
            onClick={this.handleItemClick}>
            <Link to='/team'>Team</Link>
          </Menu.Item>
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}>
            <Link to='/about'>About Us</Link>
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}>
            <Link to='/contact'>Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}