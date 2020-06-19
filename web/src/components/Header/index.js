import React from 'react';
import { Container } from './styles';
import Logo from '../../img/TaskAppLogo.svg';

function Header(){
    return (
        <Container>
            <img src={Logo} alt=""/>
            <h1>TaskApp</h1>
        </Container>
    );
}

export default Header;