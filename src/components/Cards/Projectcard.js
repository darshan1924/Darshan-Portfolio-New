import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = styled(motion.div)`
  width: 360px;
  min-height: 480px;
  background: rgba(20, 17, 24, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 18px;
  border: 1px solid rgba(199, 44, 72, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);

  &:hover {
    border-color: rgba(232, 213, 163, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(199, 44, 72, 0.35);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #0b0a0e;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(11, 10, 14, 0) 60%,
      rgba(11, 10, 14, 0.95) 100%
    );
  }
`;

const Content = styled.div`
  padding: 20px 22px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  background: rgba(232, 213, 163, 0.08);
  border: 1px solid rgba(232, 213, 163, 0.2);
  padding: 3px 9px;
  border-radius: 6px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &.primary {
    background: linear-gradient(135deg, #C72C48 0%, #8B1E3F 100%);
    color: #ffffff;
    border: 1px solid rgba(232, 213, 163, 0.3);

    &:hover {
      background: linear-gradient(135deg, #E03B56 0%, #A31D38 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(199, 44, 72, 0.4);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.text_primary};
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      border-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.secondary};
      transform: translateY(-2px);
    }
  }
`;

const ProjectCard = ({ project, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    >
      <ImageContainer>
        <img src={project.image} alt={project.title} loading="lazy" />
      </ImageContainer>

      <Content>
        <Tags>
          {project.tags?.slice(0, 4).map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
          {project.tags?.length > 4 && (
            <Tag>+{project.tags.length - 4}</Tag>
          )}
        </Tags>

        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        <ActionRow>
          {project.github && (
            <ActionBtn
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary"
            >
              <FaGithub size={14} /> Code
            </ActionBtn>
          )}
          {project.deploylink && (
            <ActionBtn
              href={project.deploylink}
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </ActionBtn>
          )}
        </ActionRow>
      </Content>
    </Card>
  );
};

export default ProjectCard;
