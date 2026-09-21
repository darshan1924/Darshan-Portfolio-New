import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/Projectcard";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 80px 24px 120px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 16px 90px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1250px;
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
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  background: rgba(20, 17, 24, 0.6);
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(199, 44, 72, 0.2);
`;

const FilterBtn = styled.button`
  background: ${({ $active, theme }) =>
    $active
      ? "linear-gradient(135deg, #C72C48 0%, #8B1E3F 100%)"
      : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? "#FFFFFF" : theme.text_secondary};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? "rgba(232, 213, 163, 0.3)" : "transparent"};
  border-radius: 999px;
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #ffffff;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
  width: 100%;
  margin-top: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <Container id="projects">
      <Wrapper>
        <SectionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Portfolio
        </SectionBadge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engineering <span className="gradient-text">Projects & Systems</span>
        </Title>

        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Showcasing enterprise backend applications, AI/ML models, microservices, and full-stack solutions.
        </Desc>

        <FilterGroup>
          <FilterBtn
            $active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All Projects ({projects.length})
          </FilterBtn>
          <FilterBtn
            $active={filter === "backend"}
            onClick={() => setFilter("backend")}
          >
            Java & Backend
          </FilterBtn>
          <FilterBtn
            $active={filter === "ml"}
            onClick={() => setFilter("ml")}
          >
            Machine Learning & AI
          </FilterBtn>
          <FilterBtn
            $active={filter === "web"}
            onClick={() => setFilter("web")}
          >
            Web Apps
          </FilterBtn>
        </FilterGroup>

        <CardContainer>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
