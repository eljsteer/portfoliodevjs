// import * as React from "react";
// import PropTypes from "prop-types";
// // import { Link } from "react-router-dom"

// import {AppBar} from "@mui/material";
// import { Box } from "@mui/material";
// import { Button } from "@mui/material";
// import { Container } from "@mui/material";
// // import { Divider } from "@mui/material";
// import { IconButton } from "@mui/material";
// // import { List } from "@mui/material";
// // import { ListItem } from "@mui/material";
// // import { ListItemButton } from "@mui/material";
// // import { ListItemIcon } from "@mui/material";
// // import { ListItemText } from "@mui/material";
// import { Menu } from "@mui/material";
// import { MenuItem } from "@mui/material";
// import { Slide } from "@mui/material";
// import { Toolbar } from "@mui/material";
// import { Tooltip } from "@mui/material";
// import { Typography } from "@mui/material";
// import { useScrollTrigger } from "@mui/material";

// // import DarkModeSwitch from "./DarkMode";

// // import "./styles/Header.css"

// ////// <<---Images & Icons--->>//////
// // import bonzaiLogo from "../../assets/headerLogo/BonzaiLogo3.png";
// // import ToolBarContent from "./ToolBarContent";
// import MenuIcon from "@mui/icons-material/Menu";

// ////-------------------------------------////
// ////<<-------- AppBar Function -------->>////
// ////-------------------------------------////

// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   //// --- Hide Up Arrow Function --- ////
//   function HideOnScroll(hideProps) {
//     const { children } = hideProps;
//     const trigger = useScrollTrigger();
  
//     return (
//       <Slide appear={true} direction="down" in={trigger}>
//         {children}
//       </Slide>
//     );
//   }
  
//   HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//   };

//   return (
//     <Container id="back-to-top-anchor" sx={{ display: "flex", position: "absolute"}}>
//       <HideOnScroll>
//         <AppBar position="static">
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="#app-bar-with-responsive-menu"
//                 sx={{
//                   mr: 2,
//                   display: { xs: 'none', md: 'flex' },
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '.3rem',
//                   color: 'inherit',
//                   textDecoration: 'none',
//                 }}
//               >
//                 LOGO
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: 'block', md: 'none' },
//                   }}
//                 >
//                   {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//               <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//               <Typography
//                 variant="h5"
//                 noWrap
//                 component="a"
//                 href="#app-bar-with-responsive-menu"
//                 sx={{
//                   mr: 2,
//                   display: { xs: 'flex', md: 'none' },
//                   flexGrow: 1,
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '.3rem',
//                   color: 'inherit',
//                   textDecoration: 'none',
//                 }}
//               >
//                 LOGO
//               </Typography>
//               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: 'white', display: 'block' }}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </Box>

//               <Box sx={{ flexGrow: 0 }}>
//                 {/* <Tooltip title="Open settings">
//                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                     <DarkModeSwitch/>
//                   </IconButton>
//                 </Tooltip> */}
//                 <Menu
//                   sx={{ mt: '45px' }}
//                   id="menu-appbar"
//                   anchorEl={anchorElUser}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={Boolean(anchorElUser)}
//                   onClose={handleCloseUserMenu}
//                 >
//                   {settings.map((setting) => (
//                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                       <Typography textAlign="center">{setting}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>
//       {/* <Box component="main">
//         <Toolbar />
//       </Box> */}
//     </Container>
//   );
// }
// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"rgba(0,0,0,0)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;