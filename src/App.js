import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
  useMediaQuery,
} from '@mui/material';
import {
  Devices,
  Speed,
  Security,
  Cloud,
  Email,
  GitHub,
} from '@mui/icons-material';
import icebeeImage from './icebee.jpg';

// Material Design 3 theme with custom color palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FA8072', // Salmon
      light: '#FFC4BA',
      dark: '#C85048',
      contrastText: '#fff',
    },
    secondary: {
      main: '#AA7DCE', // Purple
      light: '#D4B3ED',
      dark: '#7A4D9E',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#FEE440', // Yellow
      light: '#FFF0A0',
      dark: '#CCB633',
      contrastText: '#000',
    },
    info: {
      main: '#00BBF9', // Bright Blue
      light: '#66D8FC',
      dark: '#0095C7',
      contrastText: '#fff',
    },
    success: {
      main: '#00FFC5', // Mint
      light: '#66FFD8',
      dark: '#00CC9E',
      contrastText: '#000',
    },
    background: {
      default: '#FFFBFE',
      paper: '#FEFEFE',
    },
    surface: {
      main: '#FFF9FB',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <Devices sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Cross-Platform',
      description: 'Works seamlessly across all your devices with perfect synchronization.',
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with optimized algorithms.',
    },
    {
      icon: <Security sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Secure by Design',
      description: 'Your data is protected with enterprise-grade security.',
    },
    {
      icon: <Cloud sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Cloud Connected',
      description: 'Access your data anywhere with automatic cloud backup.',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* AppBar */}
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255, 251, 254, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(250, 128, 114, 0.2)',
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            myXO
          </Typography>
          <Button 
            color="primary" 
            variant="text"
            sx={{ mr: 1 }}
          >
            Partners
          </Button>
          <Button 
            color="primary" 
            variant="contained"
            sx={{ 
              background: 'linear-gradient(135deg, #FA8072 0%, #AA7DCE 100%)',
              boxShadow: '0 4px 12px rgba(250, 128, 114, 0.4)',
            }}
          >
            Test Pilots
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #FFF9FB 0%, #FFFBFE 50%, #F0FCFF 100%)',
          pt: { xs: 6, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Chip 
                  label="Coming Soon" 
                  color="primary" 
                  sx={{ 
                    width: 'fit-content',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #FEE440 0%, #00FFC5 100%)',
                    color: '#000',
                  }}
                />
                <Typography 
                  variant={isMobile ? 'h3' : 'h1'} 
                  component="h1"
                  sx={{
                    color: 'primary.dark',
                    lineHeight: 1.2,
                  }}
                >
                  Fur Trade Unleashed.
                  <Box component="span" sx={{ color: 'info.main', display: 'block' }}>
                     Terrain Conquered.
                  </Box>
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  The minibee ICEBREAKERS prototype: Engineering the coolest feats in the history of winter mobility. We don't just move through the forest; we accelerate through it.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      background: 'linear-gradient(135deg, #00BBF9 0%, #00FFC5 100%)',
                      color: '#000',
                      boxShadow: '0 8px 24px rgba(0, 187, 249, 0.4)',
                      '&:hover': {
                        boxShadow: '0 12px 32px rgba(0, 187, 249, 0.5)',
                      },
                    }}
                  >
                    Let's Chat!
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: 'primary.main',
                      color: 'primary.main',
                    }}
                  >
                    Buy me a coffee :)
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={icebeeImage}
                alt="myXO"
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  borderRadius: 4,
                  objectFit: 'cover',
                  boxShadow: '0 20px 60px rgba(250, 128, 114, 0.3)',
                  display: 'block',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Typography 
            variant={isMobile ? 'h4' : 'h2'} 
            component="h2" 
            gutterBottom
            sx={{ color: 'primary.dark', fontWeight: 600 }}
          >
            Velocity with a Vow.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            By focusing on Homelessness and Environmental Cleanup, myXO is taking the high-octane energy of an extreme sport and weaponizing it for extreme social good
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(170, 125, 206, 0.25)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FA8072 0%, #AA7DCE 50%, #00BBF9 100%)',
          py: { xs: 8, md: 10 },
          color: 'white',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography 
            variant={isMobile ? 'h4' : 'h2'} 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Experience myXO?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of early adopters who are already transforming their digital experience.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            justifyContent="center"
          >
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#FEE440',
                  color: '#000',
                },
              }}
            >
              Pre-Order Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#1A1A2E',
          color: 'white',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                © 2025 myXO. The prototype for the myXO.fun website.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
              >
                <Button 
                  startIcon={<Email />} 
                  sx={{ color: 'white', textTransform: 'none' }}
                >
                  Contact
                </Button>
                <Button 
                  startIcon={<GitHub />} 
                  sx={{ color: 'white', textTransform: 'none' }}
                  href="https://github.com/myXO-lab/myXO"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
