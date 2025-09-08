import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const WhatIDo = () => {
  const services = [
    {
      title: 'Backend Development',
      description:
        'I build and optimize backend systems using Django, Node.js, and PostgreSQL. From authentication to REST APIs and scalable data models, I focus on performance and security.',
      icon: <StorageIcon fontSize="inherit" />,
    },
    {
      title: 'AI & Machine Learning',
      description:
        'I design and deploy ML models with Scikit-learn, TensorFlow, and PyTorch. From predictive analytics to chatbots, I integrate AI into real-world applications and deploy them to the cloud.',
      icon: <AutoAwesomeIcon fontSize="inherit" />,
    },
    {
      title: 'Full-Stack Solutions',
      description:
        'I deliver end-to-end applications — connecting databases, backend logic, and modern UIs. Projects like EasyPass and the Scouting Platform showcase my ability to ship production-ready systems.',
      icon: <IntegrationInstructionsIcon fontSize="inherit" />,
    },
    {
      title: 'Cloud & Deployment',
      description:
        'I manage deployment pipelines with Git, Docker, CI/CD, Netlify, Vercel, and AWS. I ensure applications are reliable, scalable, and production-ready.',
      icon: <CloudIcon fontSize="inherit" />,
    },
    {
      title: 'Software Engineering & System Design',
      description:
        'I focus on writing clean, modular, and testable code. I apply system design best practices and reusable components to ensure long-term maintainability.',
      icon: <CodeIcon fontSize="inherit" />,
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h3"
          sx={{
            mb: 6,
            textAlign: 'left',
            fontWeight: 700,
            color: 'primary.main',
            letterSpacing: 1.2,
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
            },
          }}
        >
          What I Do
        </Typography>

        {/* Service Cards */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  backgroundColor: 'rgba(30,30,30,0.5)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {/* Icon + Title */}
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      fontSize: 30,
                      background: 'linear-gradient(135deg, #7b2ff7, #f107a3)',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatIDo;