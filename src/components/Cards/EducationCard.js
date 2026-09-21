import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaAward } from "react-icons/fa";

const Card = styled(motion.div)`
  width: 100%;
  max-width: 820px;
  background: rgba(20, 17, 24, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 18px;
  border: 1px solid rgba(199, 44, 72, 0.2);
  padding: 26px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  transition: all 0.35s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.45);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px -10px rgba(199, 44, 72, 0.3);
  }

  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  background-color: #0b0a0e;
  border-radius: 12px;
  border: 1px solid rgba(199, 44, 72, 0.25);
  padding: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const SchoolName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Degree = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
`;

const DateText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const GradeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: rgba(199, 44, 72, 0.12);
  border: 1px solid rgba(199, 44, 72, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
  width: fit-content;
`;

const Description = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const EducationCard = ({ education, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Top>
        <Logo src={education.img} alt={education.school} />
        <Body>
          <SchoolName>{education.school}</SchoolName>
          <Degree>{education.degree}</Degree>
          <DateText>
            <FaCalendarAlt size={12} /> {education.date}
            {education.location && ` • ${education.location}`}
          </DateText>
        </Body>
      </Top>

      {education.grade && (
        <GradeBadge>
          <FaAward size={13} /> {education.grade}
        </GradeBadge>
      )}

      {education.desc && <Description>{education.desc}</Description>}
    </Card>
  );
};

export default EducationCard;
