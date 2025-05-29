import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const WhatIDo = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'I build sleek, responsive, and user-friendly interfaces using React.js, Tailwind CSS, and Material UI. I love making designs come alive in the browser.',
      icon: <DesignServicesIcon fontSize="large" />
    },
    {
      title: 'Backend Development',
      description: 'I create robust backend systems using Django, Node.js, and PostgreSQL. From REST APIs to authentication, I enjoy handling the logic that powers web apps.',
      icon: <StorageIcon fontSize="large" />
    },
    {
      title: 'Full-Stack Projects',
      description: 'I develop full-fledged web applications from scratch — from the database to the UI. Projects like TaskMate, EasyPass, and the Scouting Platform show how I connect all the dots.',
      icon: <IntegrationInstructionsIcon fontSize="large" />
    },
    {
      title: 'Code & System Design',
      description: 'I love structuring projects the right way. I focus on clean code, reusable components, version control with Git, and deployment pipelines with Netlify and Vercel.',
      icon: <CodeIcon fontSize="large" />
    }
  ];

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 6,
            textAlign: 'left',
            color: 'primary.main',
            fontWeight: 'bold',
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
          What I Do
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mr: 2,
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,192,203,0.1)'
                  }}>
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
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