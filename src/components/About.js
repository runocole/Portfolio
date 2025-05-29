import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useLocation } from 'react-router-dom';

// Material UI Icons for tech stack
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import WebIcon from '@mui/icons-material/Web';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PythonIcon from '@mui/icons-material/Code';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '30px',
  color: theme.palette.primary.main,
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 192, 203, 0.1)',
  border: '2px solid rgba(255, 192, 203, 0.3)',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(255, 192, 203, 0.2)',
  },
}));

const About = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/about';
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/naomi-cv.docx`;
    link.download = 'naomi-cv.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  
  
  const technologies = [
    { name: 'Django', icon: <WebIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'React', icon: <CodeIcon /> },
    { name: 'Node.js', icon: <DeveloperModeIcon /> },
    { name: 'MongoDB', icon: <StorageIcon /> },
    { name: 'PostgreSQL', icon: <StorageIcon /> },
    { name: 'JavaScript', icon: <JavascriptIcon /> },
    { name: 'HTML5', icon: <HtmlIcon /> },
    { name: 'CSS3', icon: <CssIcon /> },
    { name: 'Material UI', icon: <AutoAwesomeIcon /> },
    { name: 'Tailwind CSS', icon: <CssIcon /> },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        pt: isStandalonePage ? 15 : 10,
        backgroundColor: 'background.default',
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
          About Me
        </Typography>

        <Grid container spacing={5}>
          {/* About Text */}
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Hello! I'm <Typography component="span" variant="h6" color="primary.main" fontFamily="Dancing Script, cursive" display="inline">Naomi Cole</Typography>, a passionate full-stack developer with a love for creating beautiful, functional web applications. With expertise in both front-end and back-end technologies, I enjoy bringing ideas to life through code.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              My journey in web development started with a curiosity about how websites work, and it quickly turned into a passion for building them myself. I specialize in <Typography component="span" color="primary.main" fontStyle="italic">React, Django, Node.js, and Material UI</Typography>, creating responsive and user-friendly applications.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'black', 
                  px: 2, 
                  py: 1, 
                  borderRadius: '30px',
                  fontWeight: 600,
                }}
              >
                Problem Solver
              </Paper>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'black', 
                  px: 2, 
                  py: 1, 
                  borderRadius: '30px',
                  fontWeight: 600,
                }}
              >
                Creative Thinker
              </Paper>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'black', 
                  px: 2, 
                  py: 1, 
                  borderRadius: '30px',
                  fontWeight: 600,
                }}
              >
                Fast Learner
              </Paper>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'black', 
                  px: 2, 
                  py: 1, 
                  borderRadius: '30px',
                  fontWeight: 600,
                }}
              >
                Team Player
              </Paper>
            </Box>
          </Grid>

          {/* Quick Facts */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 192, 203, 0.2)',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Typography 
                variant="h4" 
                component="h3" 
                sx={{ mb: 3, fontFamily: 'Dancing Script, cursive', color: 'primary.main' }}
              >
                Quick Facts
              </Typography>

              <List disablePadding>
                <StyledListItem>
                  <StyledListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </StyledListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography>
                        <Typography component="span" fontWeight="bold">Experience:</Typography> 3+ years in web development
                      </Typography>
                    } 
                  />
                </StyledListItem>
                
                <StyledListItem>
                  <StyledListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </StyledListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography>
                        <Typography component="span" fontWeight="bold">Location:</Typography> Nigeria
                      </Typography>
                    } 
                  />
                </StyledListItem>
                
                <StyledListItem>
                  <StyledListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </StyledListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography>
                        <Typography component="span" fontWeight="bold">Education:</Typography> B.Sc. in Computer Science
                      </Typography>
                    } 
                  />
                </StyledListItem>
                
                <StyledListItem>
                  <StyledListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </StyledListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography>
                        <Typography component="span" fontWeight="bold">Languages:</Typography> English (Fluent)
                      </Typography>
                    } 
                  />
                </StyledListItem>
                
                <StyledListItem>
                  <StyledListItemIcon>
                    <FiberManualRecordIcon fontSize="small" />
                  </StyledListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography>
                        <Typography component="span" fontWeight="bold">Interests:</Typography> Music, Movies, Traveling, Coding
                      </Typography>
                    } 
                  />
                </StyledListItem>
              </List>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleDownload}
                startIcon={<ArrowDownwardIcon />}
                sx={{ 
                  mt: 4, 
                  py: 1.5,
                  borderRadius: '30px',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              >
                Download Resume
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Tech Stack Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mb: 3,
              textAlign: 'left',
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            My Tech Stack
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '800px',
            }}
          >
            These are the technologies I work with to bring ideas to life. I'm constantly learning and expanding my toolkit to stay current with the latest trends.
          </Typography>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {technologies.map((tech, index) => (
              <Grid item xs={6} sm={3} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <IconBox sx={{ color: 'primary.main', mr: 2 }}>
                    {tech.icon}
                  </IconBox>
                  <Typography variant="h6" component="h3">
                    {tech.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Development Philosophy Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mt: 5,
            backgroundColor: 'rgba(30, 30, 30, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 3,
          }}
        >
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
        </Paper>
      </Container>
    </Box>
  );
};

export default About; 