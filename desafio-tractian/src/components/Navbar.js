import React from 'react';
import { Menu } from 'antd';
import './Navbar.css';

class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="bg-blue-900 center-items pb-10">
        <Menu.Item key="alipay">
          <a href="/" rel="noopener noreferrer">
            Home
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="/solucoes" rel="noopener noreferrer">
            Soulçoes
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="/empresas" rel="noopener noreferrer">
            Empresas
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="/unidades" rel="noopener noreferrer">
            Unidades
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="/usuarios" rel="noopener noreferrer">
            Usuarios
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="/graficos" rel="noopener noreferrer">
            Grágicos
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;