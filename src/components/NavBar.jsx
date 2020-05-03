import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';

const Container = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark'
})``

const Hamburger = styled.button.attrs({
    className: 'navbar-toggler',
    type: 'button'
})``

const HamburgerToggle = styled.span.attrs({
    className: 'navbar-toggler-icon'
})``

const NavContainer = styled.div.attrs({
})``

class NavBar extends Component {
constructor(props) {
    super(props);
    this.state = {
        menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
}

toggleMenu() {
    this.setState({ menu: !this.state.menu })
}

    render() {
    const show = (this.state.menu) ? 'show' : '';

        return (
            <Container>
                
                <Logo />

                <Hamburger onClick={ this.toggleMenu }>
                    <HamburgerToggle />
                </Hamburger>
                
                <NavContainer className={'collapse navbar-collapse ' + show }>
                    <Links />
                </NavContainer>

            </Container>
        )
    }
}

export default NavBar;
