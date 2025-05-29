import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

// Material UI Icons
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CloudIcon from '@mui/icons-material/Cloud';
import WebIcon from '@mui/icons-material/Web';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const IconBox = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 192, 203, 0.1)',
  border: '2px solid rgba(255, 192, 203, 0.3)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(255, 192, 203, 0.2)',
  },
}));

const Skills = () => {
  const technologies = [
    { name: 'React', icon: <CodeIcon fontSize="large" />, level: 90 },
    { name: 'Node.js', icon: <DeveloperModeIcon fontSize="large" />, level: 85 },
    { name: 'MongoDB', icon: <StorageIcon fontSize="large" />, level: 80 },
    { name: 'JavaScript', icon: <JavascriptIcon fontSize="large" />, level: 95 },
    { name: 'HTML5', icon: <HtmlIcon fontSize="large" />, level: 95 },
    { name: 'CSS3', icon: <CssIcon fontSize="large" />, level: 90 },
    { name: 'Material UI', icon: <AutoAwesomeIcon fontSize="large" />, level: 85 },
    { name: 'Django', icon: <WebIcon fontSize="large" />, level: 75 },
    { name: 'Python', icon: <CodeIcon fontSize="large" />, level: 80 },
    { name: 'Git', icon: <GitHubIcon fontSize="large" />, level: 85 }
  ];

  const currentlyLearning = [
    { name: 'TypeScript', level: 70 },
    { name: 'Next.js', level: 65 },
  ];

  return (
    <Box
      id="skills"
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
            mb: 2,
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
          My Tech Stack
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: 'text.secondary',
            fontSize: '1.1rem',
            maxWidth: '800px',
          }}
        >
          These are the technologies I work with to bring ideas to life. I'm constantly learning and expanding my toolkit to stay current with the latest trends.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <IconBox sx={{ color: 'primary.main', mb: 2 }}>
                  {tech.icon}
                </IconBox>
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  {tech.name}
                </Typography>
                <Box sx={{ width: '100%', mt: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={tech.level}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        backgroundColor: 'primary.main',
                      }
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="primary.main"
                    align="right"
                    sx={{ mt: 0.5, fontWeight: 500 }}
                  >
                    {tech.level}%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: 'rgba(30, 30, 30, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 3,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: 3,
                  color: 'primary.main',
                  fontFamily: 'Dancing Script, cursive',
                }}
              >
                My Development Philosophy
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I believe in writing clean, maintainable code that solves real problems. My approach combines:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                <Box component="li" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-block', 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      mr: 2 
                    }} 
                  />
                  <Typography>User-centered design thinking</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-block', 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      mr: 2 
                    }} 
                  />
                  <Typography>Performance optimization</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-block', 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      mr: 2 
                    }} 
                  />
                  <Typography>Responsive development practices</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-block', 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      mr: 2 
                    }} 
                  />
                  <Typography>Continuous learning and improvement</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 192, 203, 0.2)',
                borderRadius: 2,
                p: 3,
              }}>
                <Typography variant="h5" component="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Currently Learning
                </Typography>
                {currentlyLearning.map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="primary.main">
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
                          borderRadius: 4,
                          backgroundColor: 'primary.main',
                        }
                      }}
                    />
                  </Box>
                ))}
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
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills; 