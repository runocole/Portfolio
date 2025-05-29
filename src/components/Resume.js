import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BuildIcon from '@mui/icons-material/Build';

const Resume = () => {
  const education = [
    {
      period: '2021 - 2025',
      degree: 'B.Sc.(Hons) Computer Science',
      institution: 'Babcock University',
    },
  ];

  const experience = [
    {
      period: '2023- Present',
      position: 'FreeLance Full Stack Developer',
      company: 'Self-Employed / Various Clients',
      description:'Collaborated with multiple small businesses and startups to deliver custom web solutions. Built responsive UIs using React and Tailwind, and handled performance optimization, API integrations, and deployment to platforms like Vercel and Netlify.'
    },
    {
      period: '2024- 2024',
      position: 'Web Development Intern',
      company: 'AFCC Lagos',
      description: 'Assisted senior developers in building websites and web applications. Gained hands-on experience with modern frontend frameworks and libraries.'
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'MongoDB', level: 60 },
    { name: 'Material UI', level: 55 },
    { name: 'Framer Motion', level: 50 },
    { name: 'Git', level: 75},
    { name: 'GitHub', level: 40 },
    
  ];

  const currentlyLearning = [
    { name: 'TypeScript', level: 40},
    { name: 'Machine Learning', level: 30},
    { name: 'Next.js', level: 55 },
  ];

  const services = [
    {
      title: 'Frontend Development',
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      description: 'I build sleek, responsive, and user-friendly interfaces using React.js, Tailwind CSS, and Material UI. I love making designs come alive in the browser.'
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      description: 'I create robust backend systems using Django, Node.js, and PostgreSQL. From REST APIs to authentication, I enjoy handling the logic that powers web apps.'
    },
    {
      title: 'Full-Stack Projects',
      icon: <DeveloperModeIcon sx={{ fontSize: 40 }} />,
      description: 'I develop full-fledged web applications from scratch — from the database to the UI. Projects like TaskMate, EasyPass, and the Scouting Platform show how I connect all the dots.'
    },
    {
      title: 'Code & System Design',
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      description: 'I love structuring projects the right way. I focus on clean code, reusable components, version control with Git, and deployment.'
    }
  ];

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
          Resume
        </Typography>

        <Grid container spacing={4}>
          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <SchoolIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Education
              </Typography>
            </Box>

            {education.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '4px',
                    backgroundColor: 'primary.main',
                    opacity: 0.7
                  }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: 'inline-block',
                    backgroundColor: 'primary.main',
                    color: '#000',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    fontWeight: 500,
                    mb: 2
                  }}
                >
                  {item.period}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.degree}
                </Typography>
                <Typography variant="subtitle1" color="primary.main" sx={{ mb: 2, fontWeight: 500 }}>
                  {item.institution}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Grid>

          {/* Experience Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <WorkIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Experience
              </Typography>
            </Box>

            {experience.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '4px',
                    backgroundColor: 'primary.main',
                    opacity: 0.7
                  }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: 'inline-block',
                    backgroundColor: 'primary.main',
                    color: '#000',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    fontWeight: 500,
                    mb: 2
                  }}
                >
                  {item.period}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.position}
                </Typography>
                <Typography variant="subtitle1" color="primary.main" sx={{ mb: 2, fontWeight: 500 }}>
                  {item.company}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* What I Do Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 4,
              textAlign: 'left',
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            What I Do
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: 'rgba(30, 30, 30, 0.5)',
                    border: '1px solid rgba(255, 192, 203, 0.1)',
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      borderColor: 'rgba(255, 192, 203, 0.3)',
                    }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Skills Section */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <CodeIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
              Skills
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'primary.main',
                      }
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Currently Learning Section */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <LaptopMacIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
              Currently Learning
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              backgroundColor: 'rgba(30, 30, 30, 0.5)',
              border: '1px solid rgba(255, 192, 203, 0.2)',
              borderRadius: 3,
            }}
          >
            <Grid container spacing={3}>
              {currentlyLearning.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'primary.main' }}>
                        {item.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'primary.main',
                        }
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ 
              p: 2,
              mt: 3,
              borderRadius: 2,
              bgcolor: 'rgba(255, 192, 203, 0.05)',
              border: '1px dashed rgba(255, 192, 203, 0.3)',
            }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                "The more I learn, the more I realize how much I don't know."
                <Box component="span" sx={{ display: 'block', mt: 1, textAlign: 'right' }}>
                  — Albert Einstein
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume; 