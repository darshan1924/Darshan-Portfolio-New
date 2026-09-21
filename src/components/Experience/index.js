import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../Cards/ExperienceCard";
import { motion } from "framer-motion";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 100px 24px;
  max-width: 100%;

  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 999px;
  background: rgba(199, 44, 72, 0.12);
  border: 1px solid rgba(199, 44, 72, 0.35);
  color: ${({ theme }) => theme.secondary};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Title = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  .gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #e8d5a3 60%, #c72c48 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled(motion.p)`
  font-size: 1.05rem;
  text-align: center;
  max-width: 680px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

function Experience() {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Track Record & Work History
        </SectionBadge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience Built to <span className="gradient-text">Drive Impact</span>
        </Title>

        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Hands-on software engineering experience delivering enterprise backend architectures,
          RESTful microservices, and automated testing frameworks.
        </Desc>

        <CardsContainer>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id || index}
              experience={experience}
              index={index}
            />
          ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
}

export default Experience;
