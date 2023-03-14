import React from "react";
import { HeaderContainer, Menu, MenuItem } from "./style";

function Header(props) {
  return (
    <HeaderContainer>
      <Menu>
        {props.title === "Login" ? (
          <MenuItem style={{ color: "#000000" }}>Login</MenuItem>
        ) : (
          <MenuItem>Login</MenuItem>
        )}
        {props.title === "Join" ? (
          <MenuItem style={{ color: "#000000" }}>Join</MenuItem>
        ) : (
          <MenuItem>Join</MenuItem>
        )}
        {props.title === "Admin" ? (
          <MenuItem style={{ color: "#000000" }}>Admin</MenuItem>
        ) : (
          <MenuItem>Admin</MenuItem>
        )}
        {props.title === "Netflow" ? (
          <MenuItem style={{ color: "#000000" }}>Netflow</MenuItem>
        ) : (
          <MenuItem>Newflow</MenuItem>
        )}
        {props.title === "Visualization" ? (
          <MenuItem style={{ color: "#000000" }}>Visualization</MenuItem>
        ) : (
          <MenuItem>Visualization</MenuItem>
        )}
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
