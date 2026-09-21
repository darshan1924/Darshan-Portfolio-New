import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 50px 24px 30px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: #08070a;
  border-top: 1px solid rgba(199, 44, 72, 0.2);
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.a`
  font-weight: 800;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-family: "Outfit", sans-serif;
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Tagline = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 500px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8px;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 6px;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.2rem;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.primary_light};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    transform: translateY(-3px);
    box-shadow: 0 4px 15px ${({ theme }) => theme.primary_glow};
  }
`;

const Copyright = styled.div`
  margin-top: 14px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
  text-align: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  .heart {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo href="#about">
          Darshan<span>.Chavda</span>
        </Logo>

        <Tagline>
          Java Backend Developer • Spring Boot • Software Engineering
        </Tagline>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noreferrer" title="Twitter / X">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.instagram} target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.youtube} target="_blank" rel="noreferrer" title="YouTube">
            <FaYoutube />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          &copy; {new Date().getFullYear()} Darshan Chavda. Crafted with <FaHeart className="heart" size={13} /> and modern tech.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
