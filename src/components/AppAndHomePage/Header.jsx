import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DiJavascript1 } from "react-icons/di";

import { useTheme } from '../../contexts/ThemeContext';


import { NavList } from "../../layouts/NavList"
import ToggleThemeButton from './toggleThemeButton';

function Header() {
  const { isDarkMode } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="AppBar" position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{backgroundColor: "rgba(0,0,0,0)"}}>
          <DiJavascript1  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {NavList.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center"
                    sx={{ color: isDarkMode ? 'primary' : 'secondary' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DiJavascript1  sx={{ display: { xs: 'flex', md: "none", }, mr: 1 }} href="/"/>
          <Box  className="Navbar" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center" }}>
            {NavList.map((navlink) => (
                <Button
                  key={navlink.id}
                  href={navlink.url}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: isDarkMode ? 'white' : 'black',
                    display: 'block' 
                  }}
                >
                  {navlink.name}
                </Button>
            ))}
          </Box>
          <ToggleThemeButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;