import React from 'React';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    height: 60px;
    background: #f3f3f3;
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <ul>
                <li><Link to="/create-account">Create Account</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </NavbarWrapper>
    );
};

export default Navbar;