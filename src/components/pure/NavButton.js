import React    from "react"
import styled   from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import STYLE    from "../styling/Variables";

const NavigationButton = styled.li`
  color: #00f;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: normal;
  padding: 0.3em;
  font-size: 1.2em;
  border: none;
  color: ${STYLE.lightGray};
  background: transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  &:hover {
    color: #fff;
    border-bottom: 4px solid #fff;
  }
  i {
    margin-right: 0.5em;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px !important;
`

const NavButton = ({ keyName, classname, icon, text, onClick }) =>
  <NavigationButton
    key = { keyName }
    className = { classname }
    onClick = { onClick }>
    <Icon icon={ icon } />{ text }
  </NavigationButton>

module.exports = NavButton
