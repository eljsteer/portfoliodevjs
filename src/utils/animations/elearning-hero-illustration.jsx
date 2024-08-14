import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// ---- MaterialUI Imports ------->>
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
// ----- React-Icons Imports ------>>
import { FcCommandLine, FcMultipleDevices } from "react-icons/fc";
import { RiReactjsLine } from "react-icons/ri";

// ------ Component Imports ------>>
import Image from "../../utils/image";
import Icon from './pattern/icon';
import Label from './pattern/label';
import Shape from './pattern/shape';
import Pattern01 from './pattern/pattern-01';
import Pattern02 from './pattern/pattern-02';

// ------ Responsive Profile Image Imports ------>>
import profileImagePlaceholder from "../../assets/images/Profile_Image1_Square_20Placeholder.png"
import profileImage240 from "../../assets/images/Profile_Image1_Square_240px.png"
import profileImage480 from "../../assets/images/Profile_Image1_Square_480px.png"
import profileImage960 from "../../assets/images/Profile_Image1_Square_960px.png"
import profileImage1980 from "../../assets/images/Profile_Image1_Square_1980px.png"

// ----------------------------------------------------------------------


// <<---- Custom Element Syles ----->> //
const placeholderImgStyle = {
  backgroundImage: `url(${profileImagePlaceholder})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: 420, 
  height: 600, 
  borderRadius: "60px", 
  overflow: "hidden"
}

const profileImgStyle = {
  width: 420, 
  height: 600, 
  borderRadius: "60px" 
}

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// -------------------------------------------------------------------------------------------

// <<------------------------------------------------------------------->> //
// <<------ Component Function - Full Animation and Profile Image ------>> //
// <<------------------------------------------------------------------->> //
function ElearningHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const BLUE = '#355EC9';

  const PURPLE = '#9B3AB1';

  const styleIconContent = {
    fontSize: 22,
    color: 'common.black',
    fontWeight: 'fontWeightBold',
  };

  return (
    <Box
      sx={{
        width: 660,
        height: 660,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: 'absolute', right: 80, bottom: 100, zIndex: 5 }}>
        <div className="blur-load" style={placeholderImgStyle}>
          <Image
            id="profileImg"
            visibleByDefault
            disabledEffect
            alt="DevJS"
            src={profileImage1980}
            srcSet={`${profileImage240} 240w, ${profileImage480} 480w, ${profileImage960} 960w, ${profileImage1980} 1980w`}
            loading="lazy"
            sx={profileImgStyle}
          />
        </div>
      </Box>

      <Box
        {...varDown}
        component={motion.div}
        sx={{ position: 'absolute', left: 115, bottom: 115, zIndex: 8 }}
      >
        <FcMultipleDevices
          style={{fontSize: "52px" }}
        />
      </Box>

      <Box
        {...varRight}
        component={motion.div}
        sx={{ position: 'absolute', left: 18, top: 220, zIndex: 8 }}
      >
        <FcCommandLine 
          style={{fontSize:"48px"}}
        />
      </Box>

      <Box
        {...varUp}
        component={motion.div}
        sx={{ zIndex: 9, left: 120, bottom: 168, position: 'absolute' }}
      >
        <Label
          text="React"
          icon={
            <RiReactjsLine
              style={{fontSize: "48px", color:"#61DBFB"}}
            />
          }
          sx={{
            py: 1.75,
            typography: 'h3',
            color: '#355EC9',
            boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(
              theme.palette.grey[600],
              0.48
            )}`,
          }}
        />
      </Box>

      <Box
        {...varLeft}
        component={motion.div}
        sx={{ top: 88, right: 72, zIndex: 8, position: 'absolute' }}
      >
        <Icon
          color={YELLOW}
          content={<Typography sx={{ ...styleIconContent }}>HTML</Typography>}
          sx={{ transform: 'scale(1.2) rotate(15deg)' }}
        />
      </Box>

      <Box {...varRight} component={motion.div} sx={{ zIndex: 8, bottom: 160, position: 'absolute' }}>
        <Icon
          color={GREEN}
          content={<Typography sx={{ ...styleIconContent }}>JS</Typography>}
          sx={{ transform: 'translateX(40px) scale(1.2) rotate(-15deg)' }}
        />
      </Box>

      <Box {...varUp} component={motion.div} sx={{ zIndex: 8, right: 90, position: 'absolute' }}>
        <Icon
          color={PURPLE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>CSS</Typography>}
          sx={{ transform: 'scale(1.2) translateY(20px) rotate(15deg)' }}
        />
      </Box>
      
      <Box {...varDown} component={motion.div} sx={{ zIndex: 8, position: 'absolute' }}>
        <Icon
          color={BLUE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}>Py</Typography>}
          sx={{
            transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)',
          }}
        />
      </Box>

      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32, zIndex: 2 }} />
    </Box>
  );
}

// ------ Component Proptypes
ElearningHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(ElearningHeroIllustration);
