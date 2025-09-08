import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useLocation } from 'react-router-dom';

// Material UI Icons for tech stack
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';;
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
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Django', icon: <WebIcon /> },
  { name: 'FastAPI', icon: <AutoAwesomeIcon /> },
  { name: 'Node.js', icon: <DeveloperModeIcon /> },
  { name: 'PostgreSQL', icon: <StorageIcon /> },
  { name: 'MongoDB', icon: <StorageIcon /> },
  { name: 'Redis', icon: <StorageIcon /> },
  { name: 'Docker', icon: <AutoAwesomeIcon /> },
  { name: 'AWS', icon: <AutoAwesomeIcon /> },
  { name: 'NumPy', icon: <CodeIcon /> },
  { name: 'Pandas', icon: <CodeIcon /> },
  { name: 'TensorFlow', icon: <CodeIcon /> },
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
                  Hello! I'm <Typography component="span" variant="h6" color="primary.main" fontFamily="Dancing Script, cursive" display="inline">Cole Naomi</Typography>, a passionate <strong>Backend & AI/ML Engineer</strong> focused on building scalable web applications, intelligent data pipelines, and robust backend systems.
            </Typography>

           <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                   I specialize in <Typography component="span" color="primary.main" fontStyle="italic">Python, Django, Node.js, FastAPI, PostgreSQL</Typography> and have hands-on experience in deploying applications on <strong>AWS</strong> and using <strong>Docker</strong>. I also work with machine learning workflows, data preprocessing, and model deployment to create data-driven solutions.
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
                Profile Summary
              </Typography>

              <List disablePadding>
                 <StyledListItem>
  <StyledListItemIcon>
    <FiberManualRecordIcon fontSize="small" />
  </StyledListItemIcon>
  <ListItemText 
    primary={
      <Typography>
        <Typography component="span" fontWeight="bold">Experience:</Typography> 3+ years in backend & AI/ML development
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
        <Typography component="span" fontWeight="bold">Technical Stack:</Typography> Python, Django, Node.js, FastAPI, PostgreSQL
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
        <Typography component="span" fontWeight="bold">AI/ML:</Typography> Pandas, NumPy, Scikit-learn, TensorFlow
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
              I focus on writing clean, maintainable backend code, building scalable APIs, and integrating AI/ML models into real-world applications.
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