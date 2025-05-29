import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

// Project images (placeholders)
const projectImages = {
  webapps: "https://via.placeholder.com/600x400/111827/FFC0CB?text=Web+Project",
  websites: "https://via.placeholder.com/600x400/111827/FFC0CB?text=Mobile+App",
  design: "https://via.placeholder.com/600x400/111827/FFC0CB?text=UI+Design"
};

const FilterButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  borderColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: 'rgba(255, 192, 203, 0.05)'
  },
  textTransform: 'none',
  padding: '8px 16px',
  margin: '0 4px',
  borderRadius: '4px'
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
  },
  '&:hover .overlay': {
    opacity: 1
  }
}));

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
    id: 1,
    title: 'Portfolio',
    category: 'websites',
    image: '/images/portfolio.png',
    technologies: ['React', 'Material-UI'],
    description: 'A custom-designed portfolio website (the one you\'re looking at) built with React and Tailwind CSS, featuring smooth animations and responsive design.',
    },
    {
      id: 2,
      title: 'EasyPass',
      category: 'webapps',
      image: '/images/easypass-qr.png',
      technologies: ['React', 'Django', 'PostgreSQL'],
      description: 'Queue management system for exam halls.'
    },
    {
      id: 3,
      title: 'Scouting Platform',
      category: 'webapps',
      image:'/images/scouter.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'Sports analytics platform for football scouts.'
    },
    {
      id:4, 
      title: 'TaskMate',
      category: 'webapps',
      image: '/images/taskmate-dashboard.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'A task management app with PWA features.'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: '100px',
        pb: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'left',
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 5,
            position: 'relative',
            paddingLeft: '15px',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '15%',
              height: '70%',
              width: '5px',
              backgroundColor: 'primary.main',
            }
          }}
        >
          Portfolio
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <ButtonGroup variant="outlined" aria-label="portfolio filter">
            <FilterButton
              active={filter === 'all' ? 1 : 0}
              onClick={() => setFilter('all')}
            >
              All
            </FilterButton>
            <FilterButton
              active={filter === 'webapps' ? 1 : 0}
              onClick={() => setFilter('webapps')}
            >
              Webapps
            </FilterButton>
            <FilterButton
              active={filter === 'websites' ? 1 : 0}
              onClick={() => setFilter('websites')}
            >
              Websites 
            </FilterButton>
            <FilterButton
              active={filter === 'design' ? 1 : 0}
              onClick={() => setFilter('design')}
            >
              UI/UX
            </FilterButton>
          </ButtonGroup>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: 'none',
                        fontWeight: 600,
                        m: 1
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Typography
                        key={index}
                        variant="caption"
                        sx={{
                          backgroundColor: 'rgba(255, 192, 203, 0.1)',
                          color: 'primary.main',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '4px',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio; 