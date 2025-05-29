import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Alert,
  IconButton
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xanorggb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 'bold',
          }}
        >
          Get In Touch
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Interested in working together? Feel free to contact me for any project or collaboration opportunities.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 4,
                  color: 'primary.main',
                  fontWeight: 600,
                  fontFamily: 'Dancing Script, cursive',
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      mr: 2,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      runocole@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      mr: 2,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">
                      Lagos, Nigeria
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href="https://linkedin.com/in/runocole/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 192, 203, 0.2)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://github.com/runocole"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 192, 203, 0.2)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com/runocolee"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 192, 203, 0.2)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box 
                sx={{ 
                  mt: 4,
                  p: 3, 
                  background: 'linear-gradient(to right, rgba(255, 192, 203, 0.1), rgba(255, 255, 255, 0.05))',
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontFamily: 'Dancing Script, cursive',
                    fontSize: '1.2rem',
                  }}
                >
                  Let's build something amazing together!
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                Send Me a Message
              </Typography>

              {isSubmitted ? (
                <Alert 
                  severity="success"
                  sx={{ mb: 2 }}
                >
                  Thank you! Your message has been sent successfully.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          mb: 2,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 192, 203, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          mb: 2,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 192, 203, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 192, 203, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        size="large"
                        disabled={isSubmitting}
                        sx={{
                          py: 1.5,
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 