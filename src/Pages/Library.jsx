import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SongList from '../MComp/SongList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '-webkit-fill-available', overflowY: 'scroll' }}
    >
      {value === index && (
        <Box sx={{ padding: '0 2em' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Library = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: '-webkit-fill-available', height: '-webkit-fill-available', display: 'flex', }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '15%', }}
      >
        <Tab sx={{ color: '#fff', alignItems: 'flex-start' }} label="Liked" {...a11yProps(0)} />
        <Tab sx={{ color: '#fff', alignItems: 'flex-start' }} label="History" {...a11yProps(1)} />
        <Tab sx={{ color: '#fff', alignItems: 'flex-start' }} label="Following" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SongList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SongList icon='true' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Followings...
      </TabPanel>
    </Box>
  );
}

export default Library;