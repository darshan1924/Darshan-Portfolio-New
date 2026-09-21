import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px;

  @media (max-width: 960px) {
    padding: 50px 16px;
  }
`;

const Wrapper = styled.div`
  max-width: 1250px;
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
  }
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  justify-content: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(20, 17, 24, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(199, 44, 72, 0.2);
  border-radius: 20px;
  padding: 28px 22px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(232, 213, 163, 0.45);
    transform: translateY(-5px);
    box-shadow: 0 15px 35px -10px rgba(199, 44, 72, 0.3);
  }
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.22rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 18px;
  text-align: center;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 2px;
    background: linear-gradient(90deg, #C72C48, #E8D5A3);
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.03);
  padding: 8px 12px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(199, 44, 72, 0.15);
    transform: translateY(-2px);
    color: #ffffff;
  }

  .concept-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary_glow};
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const SkillBadge = ({ skill }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <SkillItem>
      {skill.image && !imgError ? (
        <SkillImage
          src={skill.image}
          alt={skill.name}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="concept-bullet" />
      )}
      <span>{skill.name}</span>
    </SkillItem>
  );
};

function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Proficiency
        </SectionBadge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills & <span className="gradient-text">Competencies</span>
        </Title>

        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Enterprise backend engineering, Spring Boot ecosystem, relational databases, and machine learning pipelines.
        </Desc>

        <SkillsGrid>
          {skills.map((item, index) => (
            <SkillCard
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <SkillCategoryTitle>{item.title}</SkillCategoryTitle>
              <SkillList>
                {item.skills.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} />
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
}

export default Skills;
