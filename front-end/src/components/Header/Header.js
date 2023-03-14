import React from "react";
import { HeaderContainer, Menu, MenuItem, StatusBar, Wrap } from "./style";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigator = useNavigate();
  return (
    <HeaderContainer>
      <Menu>
        {props.title === "Login" ? (
          <Wrap>
            <MenuItem style={{ color: "#000000" }}>Login</MenuItem>
            <StatusBar />
          </Wrap>
        ) : (
          <MenuItem onClick={() => navigator("/login")}>Login</MenuItem>
        )}
        {props.title === "Join" ? (
          <Wrap>
            <MenuItem style={{ color: "#000000" }}>Join</MenuItem>
            <StatusBar />
          </Wrap>
        ) : (
          <MenuItem onClick={() => navigator("/join")}>Join</MenuItem>
        )}
        {props.title === "Admin" ? (
          <Wrap>
            <MenuItem style={{ color: "#000000" }}>Admin</MenuItem>
            <StatusBar />
          </Wrap>
        ) : (
          <MenuItem onClick={() => navigator("/admin")}>Admin</MenuItem>
        )}
        {props.title === "Netflow" ? (
          <Wrap>
            <MenuItem style={{ color: "#000000" }}>Netflow</MenuItem>
            <StatusBar />
          </Wrap>
        ) : (
          <MenuItem onClick={() => navigator("/newflowAnalysis")}>
            Newflow
          </MenuItem>
        )}
        {props.title === "Visualization" ? (
          <Wrap>
            <MenuItem style={{ color: "#000000" }}>Visualization</MenuItem>
            <StatusBar />
          </Wrap>
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
