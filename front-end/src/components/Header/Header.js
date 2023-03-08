import React from 'react';
import {NavLink} from 'react-router-dom';
import {HeaderContainer,Menu,MenuButton} from './style'
function Header() {
  return (
    <HeaderContainer>
      <div className="menu">
        <Menu>
          <MenuButton type="button" className="btn btn-outline-info" data-bs-toggle="button" color="black">
            <NavLink to="/" className="no-underline nav-link">Home</NavLink>
          </MenuButton>
          <MenuButton type="button" className="btn btn-outline-info" data-bs-toggle="button">
            <NavLink to="/statistics" className="no-underline nav-link"> 통계</NavLink>
          </MenuButton>
          <MenuButton className="btn btn-outline-info" data-bs-toggle="button">
            <NavLink to="/analysis" className="no-underline nav-link">분석</NavLink>
          </MenuButton>
          <MenuButton className="btn btn-outline-info" data-bs-toggle="button">
            <NavLink to="/badip" className="no-underline nav-link">악성ip</NavLink>
          </MenuButton>
        </Menu>
      </div>
    </HeaderContainer>
  );
}


export default Header;
