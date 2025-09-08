import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

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
      technologies: ['React', 'Tailwind CSS'],
      description: 'My personal portfolio website showcasing projects, skills, and experience.',
      link: 'https://runocole.netlify.app'
    },
    {
      id: 2,
      title: 'EasyPass',
      category: 'webapps',
      image: '/images/easypass-qr.png',
      technologies: ['React', 'Django', 'PostgreSQL'],
      description: 'Full-stack queue and seat management system with real-time tracking and QR check-ins.',
      link: 'https://easypass-frontend.vercel.app/'
    },
     {
      id: 3,
      title: 'Location-Based E-Commerce Platform',
      category: 'webapps',
      image: '/images/location-ecommerce.png',
      technologies: ['Django', 'React', 'PostgreSQL', 'Geolocation APIs'],
      description: 'Geo-enabled shopping platform with smart search and personalized recommendations.',
      link: 'https://github.com/runocole'
    },
    {
      id: 4,
      title: 'AI-Powered Business Intelligence Platform',
      category: 'ai',
      image: '/images/ai-platform.png',
      technologies: ['Python', 'FastAPI', 'Scikit-learn', 'PostgreSQL'],
      description: 'Conversational AI chatbot with KPI dashboards, predictive analytics, and business insights.',
      link: 'https://github.com/runocole'
    },
    {
      id: 5,
      title: 'TaskMate',
      category: 'webapps',
      image: '/images/taskmate-dashboard.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'Task management PWA with real-time collaboration and notifications.',
      link: 'https://github.com/runocole'
    },
     {
      id: 6,
      title: 'Sports Scouting Platform',
      category: 'webapps',
      image:'/images/scouter.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Django REST'],
      description: 'Platform for football scouts with dynamic report generation, PDF exports, and real-time tracking.',
      link: 'https://github.com/runocole/PLS-scouting'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <Box sx={{ minHeight: '100vh', pt: '100px', pb: 8, backgroundColor: 'background.default' }}>
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
            <FilterButton active={filter === 'all' ? 1 : 0} onClick={() => setFilter('all')}>All</FilterButton>
            <FilterButton active={filter === 'webapps' ? 1 : 0} onClick={() => setFilter('webapps')}>Webapps</FilterButton>
            <FilterButton active={filter === 'websites' ? 1 : 0} onClick={() => setFilter('websites')}>Websites</FilterButton>
            <FilterButton active={filter === 'ai' ? 1 : 0} onClick={() => setFilter('ai')}>AI/ML</FilterButton>
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
                  <Box className="overlay" sx={{
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
                  }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 600, m: 1 }}>
                        View Project
                      </Button>
                    </a>
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
