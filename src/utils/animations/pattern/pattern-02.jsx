import { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// ------ MaterialUI Imports ------->>
import Box from '@mui/material/Box';

// ------ Component Imports ------->>
import Dot from './dots';
import Circle from './circle';

// ----------------------------------------------------------------------

// ------ Custom Component Styles ------>>
const animateDown = (duration = 60) => ({
  animate: { rotate: [360, 0] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

// ------ Custom Component Styles ------>>
const animateUp = (duration = 60) => ({
  animate: { rotate: [0, 360] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

// --------------------------------------------------------------------------

// ------ Component Function - Pattern for Animation ------>>
function Pattern02({ sx, ...other }) {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        ...sx,
      }}
      {...other}
    >
      <Circle hide component={m.div} {...animateDown()}>
        <Dot sx={{ left: -12, top: '50%', mt: -1.5 }} />
      </Circle>

      <Circle hide component={m.div} {...animateUp(80)}>
        <Dot size={16} color="secondary" sx={{ top: 80, left: 42 }} />
      </Circle>

      <Circle hide component={m.div} {...animateUp(100)}>
        <Dot size={14} color="success" sx={{ top: 22, left: 112 }} />
      </Circle>

      <Circle component={m.div} {...animateDown(120)}>
        <Dot size={12} color="warning" sx={{ top: 54, right: 70 }} />
      </Circle>
    </Box>
  );
}

// ------- Component Proptypes ------>>
Pattern02.propTypes = {
  sx: PropTypes.object,
};

export default memo(Pattern02);
