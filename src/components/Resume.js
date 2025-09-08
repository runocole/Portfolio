import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, LinearProgress, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CloudIcon from '@mui/icons-material/Cloud';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Resume = () => {
  const profile = `Software Engineer (Backend • AI/ML • Full-Stack) with hands-on experience 
  in building scalable web applications, intelligent data solutions, and user-facing features. 
  Skilled in Python, Django, Node.js, and PostgreSQL, complemented by frontend development using React. 
  Proficient in ML workflows, data preprocessing, and model deployment (Pandas, NumPy, Scikit-learn). 
  Experienced in microservices, API integration, Celery/Redis for async tasks, Docker, CI/CD pipelines, and AWS.`;

  const skills = [
    { category: "Programming", items: "Python, JavaScript (Node.js, React), Java, TypeScript, C/C++, SQL" },
    { category: "Backend & APIs", items: "Django, DRF, Express.js, REST & GraphQL APIs, Microservices" },
    { category: "Databases", items: "PostgreSQL, MySQL, MongoDB, Query Optimization" },
    { category: "AI & ML", items: "Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Model Training & Deployment" },
    { category: "Cloud & DevOps", items: "AWS (EC2, S3, Lambda), Docker, Git, CI/CD, Azure, GCP" },
    { category: "Frontend", items: "React, HTML, CSS" },
    { category: "Async Processing", items: "Celery, Redis" },
  ];

  const experience = [
    {
      period: "Jul 2025 – Present",
      position: "Lead Backend Developer",
      company: "NexusMind",
      points: [
        "Designed and implemented RESTful APIs and scalable database schemas.",
        "Integrated payment gateways and location services.",
        "Built secure authentication/authorization (JWT, OAuth2).",
        "Optimized queries, cutting response times by 35%.",
        "Automated deployments with Docker and CI/CD pipelines."
      ]
    },
    {
      period: "2023 – Present",
      position: "Freelance Full-Stack Engineer",
      company: "Remote",
      points: [
        "Delivered 5+ production-ready apps for clients with Django, Node.js, React, PostgreSQL.",
        "Integrated REST APIs and microservices with authentication, payments, and 3rd-party services.",
        "Implemented data pipelines & ML models for analytics/forecasting.",
        "Deployed applications with Docker, provided client support post-launch."
      ]
    },
    {
      period: "Jan – Jul 2024",
      position: "Full-Stack Development Intern",
      company: "AFCC, Lagos",
      points: [
        "Developed features using Django REST Framework, React, and PostgreSQL.",
        "Integrated third-party payment gateways and location services.",
        "Helped design database schemas and implement API integrations.",
        "Built responsive React components with state management.",
        "Participated in code reviews, debugging, and deployment processes."
      ]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Business Intelligence Platform (AI-BI)",
      stack: "Python, FastAPI, PostgreSQL, Scikit-learn, XGBoost",
      points: [
        "Built an AI chatbot for natural language analytics queries.",
        "Designed KPI dashboards with FastAPI (revenue, churn, metrics).",
        "Implemented predictive analytics (Scikit-learn, Prophet, XGBoost).",
        "Deployed with Docker & CI/CD pipelines."
      ],
      link: "Private Repo (Available on Request)"
    },
    {
      title: "Smart Queue Management System",
      stack: "Django, React, PostgreSQL, WebSockets",
      points: [
        "Built real-time queue tracking with WebSockets.",
        "Implemented QR code verification for secure check-ins.",
        "Developed an admin dashboard for monitoring queues."
      ],
      link: "Live: https://easypass-frontend.vercel.app | GitHub: https://github.com/runocole/EasyPass-Backend"
    },
    {
      title: "Location-Based E-Commerce Platform",
      stack: "Django, PostgreSQL, React, Geolocation APIs",
      points: [
        "Integrated geolocation APIs and payment services.",
        "Designed and deployed scalable backend architecture.",
        "Optimized PostgreSQL queries for faster retrieval."
      ],
      link: "Private Repo (Available on Request)"
    },
    {
      title: "Sports Scouting & Reporting System",
      stack: "Django REST Framework, React",
      points: [
        "Built dynamic report generation with filtering/search.",
        "Implemented PDF export for offline access/sharing.",
        "Developed real-time status tracking for scouting progress."
      ],
      link: "GitHub: https://github.com/runocole/bytecraft"
    }
  ];

  const education = [
    {
      period: "2021 – 2025",
      degree: "B.Sc. Computer Science",
      institution: "Babcock University"
    }
  ];

  const certifications = [
    {
      title: "Certificate of Completion – Multi-Course IT Training Program (9 Courses)",
      issuer: "New Horizons Computer Learning Centers",
      details: "Covered backend, full-stack, mobile, and cybersecurity. Key courses: Python, Django, PHP, REST API Development, PostgreSQL, Java, Kotlin, Cloud Fundamentals, Cybersecurity Essentials."
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: 6, pb: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 4 }}>
          📧 runocole@gmail.com | 📞 08024626423 | 🌐 runocole.netlify.app | 
          <Link href="https://github.com/runocole" target="_blank" sx={{ mx: 1 }}>GitHub</Link> | 
          <Link href="https://linkedin.com/in/runocole" target="_blank" sx={{ mx: 1 }}>LinkedIn</Link>
        </Typography>

        {/* Profile */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Profile</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>{profile}</Typography>

        {/* Skills */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Technical Skills</Typography>
        {skills.map((skill, i) => (
          <Typography key={i} variant="body1" sx={{ mb: 1 }}>
            <strong>{skill.category}:</strong> {skill.items}
          </Typography>
        ))}

        <Divider sx={{ my: 4 }} />

        {/* Experience */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Experience</Typography>
        {experience.map((exp, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ color: "primary.main" }}>{exp.period}</Typography>
            <Typography variant="h6">{exp.position} – {exp.company}</Typography>
            <ul>
              {exp.points.map((p, idx) => <li key={idx}><Typography variant="body2">{p}</Typography></li>)}
            </ul>
          </Box>
        ))}

        <Divider sx={{ my: 4 }} />

        {/* Projects */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Projects</Typography>
        {projects.map((proj, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography variant="h6">{proj.title}</Typography>
            <Typography variant="subtitle2" color="primary.main">{proj.stack}</Typography>
            <ul>
              {proj.points.map((p, idx) => <li key={idx}><Typography variant="body2">{p}</Typography></li>)}
            </ul>
            <Typography variant="body2" color="text.secondary">{proj.link}</Typography>
          </Box>
        ))}

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Education</Typography>
        {education.map((edu, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ color: "primary.main" }}>{edu.period}</Typography>
            <Typography variant="h6">{edu.degree}</Typography>
            <Typography variant="body2">{edu.institution}</Typography>
          </Box>
        ))}

        {/* Certifications */}
        <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>Certifications</Typography>
        {certifications.map((cert, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography variant="h6">{cert.title}</Typography>
            <Typography variant="subtitle2" color="primary.main">{cert.issuer}</Typography>
            <Typography variant="body2">{cert.details}</Typography>
          </Box>
        ))}

      </Container>
    </Box>
  );
};

export default Resume;