import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const profileImage = '/images/image.png';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  padding: '12px 30px',
  margin: theme.spacing(1),
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    color: 'black',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  '&.outlined': {
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(255, 192, 203, 0.1)'
    }
  }
}));

// Typing animation
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['Backend Engineer', 'AI/ML Developer', 'Python & Node.js Specialist'];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/naomi-cv.pdf`;
    link.download = 'naomi-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
        overflow: 'hidden',
        pt: { xs: '100px', md: 0 },
      }}
      id="home"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ pl: { md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontSize: { xs: '3rem', md: '4.5rem' },
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.1,
                    mr: 2
                  }}
                >
                  Naomi Cole
                </Typography>
                <Avatar
                  src={profileImage}
                  alt="Naomi Cole"
                  sx={{
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 15px rgba(255, 192, 203, 0.5)'
                  }}
                />
              </Box>

              <Box sx={{ height: '40px', mb: 3 }}>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    fontWeight: 400,
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block'
                  }}
                >
                  {text}
                  <Box
                    component="span"
                    sx={{
                      borderRight: '2px solid',
                      animation: `${blink} 1s step-end infinite`,
                      ml: 0.5
                    }}
                  >&nbsp;</Box>
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  lineHeight: 1.7
                }}
              >
               I'm a Backend & AI/ML Engineer passionate about building scalable applications, data-driven solutions, and robust backend systems. I specialize in Python, Django, Node.js, and PostgreSQL, and I enjoy deploying applications to the cloud using Docker and AWS.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
                <StyledButton
                  className="outlined"
                  onClick={handleDownload}
                  startIcon={<ArrowDownwardIcon />}
                >
                  Download CV
                </StyledButton>
                <StyledButton
                  className="primary"
                  href="#contact"
                >
                  Contact
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 