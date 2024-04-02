import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  
  padding: 8px 0;
  background: rgb(50,50,50);
  background:rgba(0,0,0,0.2);
  padding: 10px 0;
  box-shadow: 2px 12px 5px -9px rgba(0,0,0,0.48);
`;

// background: radial-gradient(circle, rgba(50,50,50,1) 0%, rgba(77,76,76,1) 100%);


export const Nav = styled.nav`
    display: flex;
    gap:20px;
    align-items: center;
    justify-content: center;

`



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  transition: all 250ms linear;

  &.active {
    color:#e9effd;
    transform: scale(1.3);
  }

  @media screen and (max-width: 694px) {
    font-size: 12px;
     font-weight: 400;
  }

`;