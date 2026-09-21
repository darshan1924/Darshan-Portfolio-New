import React from "react";
import styled from "styled-components";
import { education, certifications } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

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
  }
`;

const SectionGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 820px;
`;

const CertCard = styled(motion.div)`
  background: rgba(20, 17, 24, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(199, 44, 72, 0.2);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.45);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -5px rgba(199, 44, 72, 0.3);
  }
`;

const CertIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(199, 44, 72, 0.15);
  border: 1px solid rgba(199, 44, 72, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.2rem;
  flex-shrink: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const CertContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CertTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const CertIssuer = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
`;

const CertDesc = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
  margin: 4px 0 0 0;
`;

function Education() {
  return (
    <Container id="education">
      <Wrapper>
        <SectionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Academic Journey & Qualifications
        </SectionBadge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Education & <span className="gradient-text">Certifications</span>
        </Title>

        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          My educational background, degree milestones, professional certifications, and fellowship leadership.
        </Desc>

        <SectionGroup>
          {education.map((edu, index) => (
            <EducationCard key={edu.id || index} education={edu} index={index} />
          ))}
        </SectionGroup>

        {certifications && certifications.length > 0 && (
          <>
            <SectionBadge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: "10px" }}
            >
              Professional Certifications & Fellowship
            </SectionBadge>

            <CertGrid>
              {certifications.map((cert, index) => (
                <CertCard
                  key={cert.id || index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CertIcon>
                    {cert.badge ? (
                      <img src={cert.badge} alt={cert.issuer} />
                    ) : (
                      <FaMedal />
                    )}
                  </CertIcon>
                  <CertContent>
                    <CertTitle>{cert.title}</CertTitle>
                    <CertIssuer>
                      {cert.issuer} • {cert.date}
                    </CertIssuer>
                    <CertDesc>{cert.desc}</CertDesc>
                  </CertContent>
                </CertCard>
              ))}
            </CertGrid>
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default Education;
