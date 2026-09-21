import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import DarshanImg from "../../images/Darshan-Photo.jpeg";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaServer,
  FaGraduationCap,
} from "react-icons/fa";

const pulseGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.85;
  }
`;

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px 100px;
  background: radial-gradient(
      circle at 15% 25%,
      rgba(199, 44, 72, 0.16) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(232, 213, 163, 0.1) 0%,
      transparent 45%
    ),
    #09080c;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 40px 18px 70px;
    min-height: auto;
  }
`;

// Subtle Ambient Grid in background
const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at 50% 50%, black 50%, transparent 90%);
  -webkit-mask-image: radial-gradient(
    circle at 50% 50%,
    black 50%,
    transparent 90%
  );
  pointer-events: none;
  z-index: 0;
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  display: grid;
  grid-template-columns: 1.15fr 0.95fr;
  gap: 60px;
  align-items: center;
  z-index: 2;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
`;

const LeftContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const AvailabilityBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(20, 17, 24, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(199, 44, 72, 0.35);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  width: fit-content;

  .pulse-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: ${pulseGlow} 2s infinite ease-in-out;
  }

  span {
    font-size: 0.88rem;
    font-weight: 600;
    color: #e8d5a3;
    letter-spacing: 0.02em;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.4rem;
  font-weight: 800;
  color: #f8f6f4;
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 0;

  .name-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #e8d5a3 50%, #c72c48 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1100px) {
    font-size: 2.9rem;
  }

  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
`;

const DynamicRoleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.45rem;
  font-weight: 600;
  color: #b8b2ba;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const HighlightRole = styled.span`
  color: #c72c48;
  font-weight: 700;
  border-bottom: 2px solid #e8d5a3;
  padding-bottom: 2px;
`;

const BioSummary = styled.p`
  font-size: 1.05rem;
  color: #b0a9b4;
  line-height: 1.7;
  margin: 0;
  max-width: 580px;

  @media (max-width: 768px) {
    font-size: 0.96rem;
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 6px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 15px 32px;
  background: linear-gradient(135deg, #c72c48 0%, #8b1e3f 50%, #681228 100%);
  border: 1px solid rgba(232, 213, 163, 0.45);
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  box-shadow: 0 10px 30px -5px rgba(199, 44, 72, 0.55);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 16px 36px rgba(199, 44, 72, 0.75);
    border-color: #e8d5a3;
    color: #ffffff;
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 15px 28px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  color: #f8f6f4;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(232, 213, 163, 0.1);
    border-color: #e8d5a3;
    color: #e8d5a3;
    transform: translateY(-2px);
  }
`;

// Metrics Highlight Counters
const MetricsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 14px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 580px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetricValue = styled.span`
  font-family: "Outfit", "Space Grotesk", sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: #e8d5a3;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

const MetricLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #8e8894;
  line-height: 1.3;
`;

// Right Column: Showstopper Portrait Showcase
const RightShowcase = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PortraitArtframe = styled.div`
  position: relative;
  width: 400px;
  height: 490px;
  max-width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    width: 310px;
    height: 390px;
  }

  /* Radiant Ambient Glow Behind Image */
  &::before {
    content: "";
    position: absolute;
    inset: -16px;
    border-radius: 36px;
    background: linear-gradient(
      135deg,
      rgba(199, 44, 72, 0.6) 0%,
      rgba(232, 213, 163, 0.25) 50%,
      rgba(139, 30, 63, 0.6) 100%
    );
    filter: blur(28px);
    opacity: 0.65;
    z-index: 0;
    animation: ${pulseGlow} 5s ease-in-out infinite;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid rgba(232, 213, 163, 0.4);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85);
  background: #141118;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.04);
  }

  /* Subtle bottom gradient shadow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(9, 8, 12, 0) 65%,
      rgba(9, 8, 12, 0.85) 100%
    );
  }
`;

// Floating Glass Feature Pills
const FloatingFeaturePill = styled(motion.div)`
  position: absolute;
  padding: 11px 18px;
  border-radius: 16px;
  background: rgba(18, 15, 22, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(199, 44, 72, 0.35);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 3;
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;

  .pill-icon {
    color: #e8d5a3;
    font-size: 1.15rem;
  }

  &.pill-top-left {
    top: -15px;
    left: -25px;
    animation: ${floatAnim} 4s ease-in-out infinite;

    @media (max-width: 640px) {
      left: -10px;
      top: -10px;
      padding: 8px 14px;
      font-size: 0.8rem;
    }
  }

  &.pill-bottom-right {
    bottom: -15px;
    right: -25px;
    animation: ${floatAnim} 4.5s ease-in-out infinite 1s;

    @media (max-width: 640px) {
      right: -10px;
      bottom: -10px;
      padding: 8px 14px;
      font-size: 0.8rem;
    }
  }

  &.pill-center-left {
    bottom: 60px;
    left: -35px;
    animation: ${floatAnim} 5s ease-in-out infinite 2s;

    @media (max-width: 640px) {
      display: none;
    }
  }
`;

function Hero() {
  return (
    <HeroSection id="about">
      <BackgroundGrid />
      <HeroContainer>
        <LeftContent
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AvailabilityBadge
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="pulse-dot" />
            <span>Open for Java Backend Roles</span>
          </AvailabilityBadge>

          <MainHeading>
            Hi, I'm <span className="name-gradient">{Bio.name}</span>
          </MainHeading>

          <DynamicRoleWrapper>
            Specializing in
            <HighlightRole>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 35,
                }}
              />
            </HighlightRole>
          </DynamicRoleWrapper>

          <BioSummary>{Bio.description}</BioSummary>

          <CTAButtonGroup>
            <PrimaryCTA href={Bio.resume} target="_blank" rel="noreferrer">
              <FaDownload size={14} /> View Full Resume
            </PrimaryCTA>
            <SecondaryCTA href="#contact">
              <FaEnvelope size={14} /> Get in Touch
            </SecondaryCTA>
          </CTAButtonGroup>

          <MetricsRow>
            <MetricItem>
              <MetricValue>8.31</MetricValue>
              <MetricLabel>B.Tech CGPA Distinction</MetricLabel>
            </MetricItem>
            <MetricItem>
              <MetricValue>3+</MetricValue>
              <MetricLabel>Industry Internships</MetricLabel>
            </MetricItem>
            <MetricItem>
              <MetricValue>6+</MetricValue>
              <MetricLabel>Engineering Projects</MetricLabel>
            </MetricItem>
          </MetricsRow>
        </LeftContent>

        <RightShowcase
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <PortraitArtframe>
            <ImageContainer>
              <img src={DarshanImg} alt="Darshan Chavda" />
            </ImageContainer>

            <FloatingFeaturePill className="pill-top-left">
              <FaServer className="pill-icon" />
              <div>
                <div>Java & Spring Boot</div>
              </div>
            </FloatingFeaturePill>

            <FloatingFeaturePill className="pill-bottom-right">
              <FaGraduationCap className="pill-icon" />
              <div>
                <div>CHARUSAT • 2025</div>
                <div style={{ fontSize: "0.74rem", color: "#8e8894", fontWeight: 400 }}>
                  Computer Engineering
                </div>
              </div>
            </FloatingFeaturePill>

          </PortraitArtframe>
        </RightShowcase>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
