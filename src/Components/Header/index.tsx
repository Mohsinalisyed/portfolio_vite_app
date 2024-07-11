import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import "./style.scss";
interface iprops {
  isOpen?: boolean;
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`Main-header`}>
        <div className="Header">
          <nav className="navbar navbar-expand-lg">
           <div className="end">
           <a className="navbar-brand protfolio-text" href="###">
              <span>P</span>ort<span>F</span>olio
            </a>
           </div>
            <NavbarToggler className={!isOpen ? 'collapsed' : ''} onClick={() => setIsOpen(!isOpen)}>
      <Line />
      <Line />
      <Line />
    </NavbarToggler>
    <Menu isOpen={isOpen}>
         <div >
         <ul className="navbar-nav" >
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/certification" className="nav-link">
                    Certification
                  </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                </li>
              </ul>
         </div >
              <div>
                <ul className="navbar-nav">
                  <li className="nav-item d-flex">
                    <a
                      className="nav-link"
                      href="https://github.com/Mohsinalisyed?tab=repositories"
                      data-tooltip-id="github"
                      data-tooltip-content="Github"
                      data-tooltip-place="top"
                      target="_blank" rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <Tooltip id="github" />
                    <a
                      className="nav-link px-3"
                      href="https://www.linkedin.com/in/mohsin-ali-syed-10a16b215"
                      data-tooltip-id="linkedin"
                      data-tooltip-content="LinkedIn"
                      data-tooltip-place="top"
                      target="_blank" rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <Tooltip id="linkedin" />
                    <a
                      className="nav-link"
                      href="https://app.netlify.com/teams/shahmohsin873/overview"
                      data-tooltip-id="netlify"
                      data-tooltip-content="Netlify"
                      data-tooltip-place="top"
                      target="_blank" rel="noreferrer"
                    >
                      <SiNetlify />
                    </a>
                    <Tooltip id="netlify" />
                  </li>
                </ul>
              </div>
           </Menu>
          </nav>
        </div>
      </div>
    </>
  );
};
const NavbarToggler = styled.button`
display: none;

  @media (max-width: 992px) {
    display: block;
    background-color: transparent;
    border: none;
    height: 30px;
    position: relative;
    width: 30px;
    padding: 0;
  
  }
`;
const Menu = styled.div<iprops>`
 margin-left:35px;
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items: center;
  position: relative;
 
  background-color:  #646464;
  @media (max-width: 992px) {
    overflow: hidden;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    left: ${({ isOpen }) => (isOpen ? '0' : '-110%')};
    transition: left 1s ease-in-out;
    width: 100%;
    margin:0;
    padding:0;
    background-color:#646464;
    height:auto;
  }
`;
const Line = styled.span`
  background-color: #fff;
  height: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
  display: block;
  opacity: 1;
  position: relative;
  transition: all 0.35s ease-out;
  transform-origin: center left;
  width: 25px;

  &:nth-child(1) {
    margin-top: 0.3em;
  }

  ${NavbarToggler}:not(.collapsed) & {
    &:nth-child(1) {
      transform: translate(15%, -33%) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translate(15%, 33%) rotate(-45deg);
    }
  }
`;
export default Header;
