import React from "react";
import { HeaderContainer, Menu, MenuItem } from "./style";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigator = useNavigate();
  return (
    <HeaderContainer>
      <Menu>
        {props.title === "Login" ? (
          <MenuItem style={{ color: "#000000" }}>Login</MenuItem>
        ) : (
          <MenuItem onClick={() => navigator("/login")}>Login</MenuItem>
        )}
        {props.title === "Join" ? (
          <MenuItem style={{ color: "#000000" }}>Join</MenuItem>
        ) : (
          <MenuItem onClick={() => navigator("/join")}>Join</MenuItem>
        )}
        {props.title === "Admin" ? (
          <MenuItem style={{ color: "#000000" }}>Admin</MenuItem>
        ) : (
          <MenuItem onClick={() => navigator("/admin")}>Admin</MenuItem>
        )}
        {props.title === "Netflow" ? (
          <MenuItem style={{ color: "#000000" }}>Netflow</MenuItem>
        ) : (
          <MenuItem onClick={() => navigator("/newflowAnalysis")}>
            Newflow
          </MenuItem>
        )}
        {props.title === "Visualization" ? (
          <MenuItem style={{ color: "#000000" }}>Visualization</MenuItem>
        ) : (
          <MenuItem onClick={() => navigator("/visualization")}>
            Visualization
          </MenuItem>
        )}
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
