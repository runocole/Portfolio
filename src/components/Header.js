import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const pages = ['About', 'Resume', 'Portfolio', 'Contact'];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', boxShadow: 0, borderBottom: '1px solid rgba(255, 192, 203, 0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand for larger screens */}
          <Typography
            variant="h4"
            component={Link}
            to="/"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Dancing Script, cursive',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            Naomi Cole
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: { width: '70%', backgroundColor: 'black', border: 'none', padding: '20px' }
              }}
            >
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  my: 2,
                  fontFamily: 'Dancing Script, cursive',
                  fontWeight: 700,
                  color: 'primary.main',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Naomi Cole
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton 
                    component={Link}
                    to="/"
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      textAlign: 'center',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <ListItemText 
                      primary="Home" 
                      primaryTypographyProps={{ fontWeight: 500 }} 
                    />
                  </ListItemButton>
                </ListItem>
                
                {pages.map((page) => (
                  <ListItem key={page} disablePadding>
                    <ListItemButton 
                      component={Link}
                      to={`/${page.toLowerCase()}`}
                      onClick={handleCloseNavMenu}
                      sx={{ 
                        textAlign: 'center',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      <ListItemText 
                        primary={page} 
                        primaryTypographyProps={{ fontWeight: 500 }} 
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
                <IconButton color="inherit" href="https://github.com/runocole" target="_blank">
                  <GitHubIcon sx={{ color: '#FFC0CB' }} />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com/in/runocole/" target="_blank">
                  <LinkedInIcon sx={{ color: '#FFC0CB' }} />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com/runocolee" target="_blank">
                  <TwitterIcon sx={{ color: '#FFC0CB' }} />
                </IconButton>
              </Box>
            </Drawer>
          </Box>

          {/* Logo for mobile view */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Dancing Script, cursive',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            Naomi Cole
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/"
              sx={{ 
                my: 2, 
                mx: 1, 
                color: 'white', 
                display: 'block',
                '&:hover': { color: 'primary.main' }
              }}
            >
              Home
            </Button>
            
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ 
                  my: 2, 
                  mx: 1, 
                  color: 'white', 
                  display: 'block',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Social media links for desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <IconButton
              href="https://github.com/runocole"
              target="_blank"
              aria-label="Github"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/runocole/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/runocolee"
              target="_blank"
              aria-label="Twitter"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 