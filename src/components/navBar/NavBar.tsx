import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { ColorModeContext } from '../../config/ColorModeContext';
import { yellow, grey } from '@mui/material/colors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GradientText from '../styled/GradientText';
import { handleNavClick } from '../../lib/util';

const pages = [
    {
        title: 'Introduction',
        handleClick: () => handleNavClick('introduction'),
        id: 'introduction',
    },
    {
        title: 'Design',
        handleClick: () => handleNavClick('design'),
        id: 'design',
    },
    {
        title: 'Implementation',
        handleClick: () => handleNavClick('implementation'),
        id: 'implementation',
    },
    {
        title: 'Result',
        handleClick: () => handleNavClick('result'),
        id: 'result',
    }
];


interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function NavBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={{ bgcolor: theme.palette.mode === 'dark' ? 'inherit' : 'white' }}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant='h5'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <GradientText>PLUSV+</GradientText>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  sx={{
                    color:
                      theme.palette.mode === 'dark' ? 'inherit' : grey[500],
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title} onClick={page.handleClick}>
                      <Typography textAlign='center'>{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant='h5'
                noWrap
                component='a'
                href=''
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <GradientText>PLUSV+</GradientText>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    onClick={page.handleClick}
                    sx={{
                      my: 2,
                      color: theme.palette.mode === 'dark' ? 'white' : 'black',
                      display: 'block',
                    }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color='inherit'
                >
                  {theme.palette.mode === 'dark' ? (
                    <DarkModeIcon sx={{ color: yellow[500] }} />
                  ) : (
                    <LightModeIcon sx={{ color: yellow[700] }} />
                  )}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <ScrollTop>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavBar;