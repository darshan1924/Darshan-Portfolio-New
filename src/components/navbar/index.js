import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaLaptopCode, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.header`
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? "rgba(11, 10, 14, 0.88)"
      : "rgba(11, 10, 14, 0.6)"};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid
    ${({ $scrolled, theme }) =>
      $scrolled ? "rgba(199, 44, 72, 0.25)" : "transparent"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none"};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 28px;
  max-width: 1250px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }

  .logo-icon {
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.primary_glow});
  }

  .logo-gold {
    color: ${({ theme }) => theme.secondary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 868px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.25s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 868px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.primary_light};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${({ theme }) => theme.primary_glow};
  }
`;

const PrimaryButton = styled.a`
  background: linear-gradient(135deg, #C72C48 0%, #8B1E3F 100%);
  color: ${({ theme }) => theme.white};
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(199, 44, 72, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 25px rgba(199, 44, 72, 0.55);
    border-color: ${({ theme }) => theme.secondary};
    color: #FFFFFF;
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 868px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 30px 20px 40px;
  background: rgba(15, 12, 18, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(199, 44, 72, 0.3);
  transition: all 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-120%)")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  z-index: 40;
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 1.15rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <NavLogo to="/">
          <FaLaptopCode className="logo-icon" />
          <span>
            Darshan<span className="logo-gold">.dev</span>
          </span>
        </NavLogo>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <SocialLink href={Bio.github} target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <PrimaryButton href={Bio.resume} target="_blank" rel="noreferrer">
            Resume
          </PrimaryButton>
        </ButtonContainer>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileMenu $isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>
            About
          </MobileLink>
          <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </MobileLink>
          <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </MobileLink>
          <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </MobileLink>
          <MobileLink href="#education" onClick={() => setIsOpen(false)}>
            Education
          </MobileLink>
          <MobileLink href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileLink>
          <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
            <SocialLink href={Bio.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </SocialLink>
          </div>
          <PrimaryButton href={Bio.resume} target="_blank" rel="noreferrer" style={{ width: "80%", textAlign: "center", marginTop: "8px" }}>
            View Resume
          </PrimaryButton>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;