import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
  },
}));

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <CodeIcon fontSize="large" color="primary" /> },
    { name: 'Django / DRF', icon: <DataObjectIcon fontSize="large" color="primary" /> },
    { name: 'Node.js / Express', icon: <DeveloperModeIcon fontSize="large" color="primary" /> },
    { name: 'PostgreSQL', icon: <StorageIcon fontSize="large" color="primary" /> },
    { name: 'MongoDB', icon: <StorageIcon fontSize="large" color="primary" /> },
    { name: 'MySQL', icon: <StorageIcon fontSize="large" color="primary" /> },
    { name: 'AWS', icon: <CloudIcon fontSize="large" color="primary" /> },
    { name: 'Docker', icon: <SettingsIcon fontSize="large" color="primary" /> },
    { name: 'CI/CD', icon: <TerminalIcon fontSize="large" color="primary" /> },
    { name: 'Celery & Redis', icon: <SettingsIcon fontSize="large" color="primary" /> },
    { name: 'Git & GitHub', icon: <GitHubIcon fontSize="large" color="primary" /> },
  ];

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            mb: 6,
            textAlign: 'center',
            letterSpacing: 1.2,
          }}
        >
          Skills & Tools
        </Typography>

        {/* Skill Cards */}
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillCard>
                {skill.icon}
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                  {skill.name}
                </Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;