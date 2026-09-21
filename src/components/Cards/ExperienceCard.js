import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Card = styled(motion.div)`
  width: 100%;
  max-width: 820px;
  background: rgba(21, 18, 26, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  border: 1px solid rgba(199, 44, 72, 0.22);
  padding: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #C72C48 0%, #E8D5A3 100%);
    opacity: 0.8;
  }

  &:hover {
    border-color: rgba(232, 213, 163, 0.5);
    box-shadow: 0 20px 40px -15px rgba(199, 44, 72, 0.35);
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 22px 18px;
    gap: 14px;
  }
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 52px;
  width: 52px;
  object-fit: cover;
  background-color: #0b0a0e;
  border-radius: 12px;
  border: 1px solid rgba(199, 44, 72, 0.3);
  padding: 4px;
`;

const RoleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoleTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const CompanyName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MetaBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

const DateTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const IndexNumber = styled.span`
  font-family: "Outfit", sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: rgba(232, 213, 163, 0.2);
  line-height: 1;

  @media (max-width: 640px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

const Description = styled.p`
  font-size: 0.96rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;

  .check-icon {
    color: ${({ theme }) => theme.primary};
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const SkillTag = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(199, 44, 72, 0.12);
  border: 1px solid rgba(199, 44, 72, 0.28);
  padding: 4px 10px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(199, 44, 72, 0.25);
    border-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondary};
  }
`;

const ExperienceCard = ({ experience, index }) => {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <Card
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <TopHeader>
        <CompanyInfo>
          <Logo src={experience.img} alt={experience.company} />
          <RoleDetails>
            <RoleTitle>{experience.role}</RoleTitle>
            <CompanyName>
              {experience.company}
              {experience.location && (
                <span style={{ fontSize: "0.82rem", color: "#8e8894", fontWeight: 400 }}>
                  • {experience.location}
                </span>
              )}
            </CompanyName>
          </RoleDetails>
        </CompanyInfo>

        <MetaBadge>
          <DateTag>
            <FaCalendarAlt size={11} /> {experience.date}
          </DateTag>
          <IndexNumber>{formattedIndex}</IndexNumber>
        </MetaBadge>
      </TopHeader>

      <Description>{experience.desc}</Description>

      {experience.highlights && (
        <HighlightsList>
          {experience.highlights.map((item, i) => (
            <HighlightItem key={i}>
              <FaCheckCircle className="check-icon" size={14} />
              <span>{item}</span>
            </HighlightItem>
          ))}
        </HighlightsList>
      )}

      {experience?.skills && (
        <SkillsSection>
          {experience.skills.map((skill, idx) => (
            <SkillTag key={idx}>{skill}</SkillTag>
          ))}
        </SkillsSection>
      )}
    </Card>
  );
};

export default ExperienceCard;
