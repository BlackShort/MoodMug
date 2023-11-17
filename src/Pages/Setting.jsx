import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const Setting = () => {
  const [autoSelectQuality, setAutoSelectQuality] = useState(true);
  const [userGuide, setUserGuide] = useState(true);
  const [storagePermission, setStoragePermission] = useState(true);
  const [stereoMode, setStereoMode] = useState(false);
  const [downloadSongs, setDownloadSongs] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [languagePreference, setLanguagePreference] = useState('English');
  const [themeSelection, setThemeSelection] = useState('Light');
  const [equalizerSettings, setEqualizerSettings] = useState({ bass: 50, treble: 50, balance: 0 });
  const [crossfadePlayback, setCrossfadePlayback] = useState(false);
  const [lyricsDisplay, setLyricsDisplay] = useState(true);
  const [socialMediaSharing, setSocialMediaSharing] = useState(false);
  const [streamOverMobileData, setStreamOverMobileData] = useState(true);
  const [explicitContentFilter, setExplicitContentFilter] = useState(false);
  // const [accountPreferences, setAccountPreferences] = useState({});
  // const [privacySettings, setPrivacySettings] = useState({});
  const [autoPlayNextSong, setAutoPlayNextSong] = useState(true);
  const [backgroundPlay, setBackgroundPlay] = useState(true);
  const [autoUpdateLibrary, setAutoUpdateLibrary] = useState(true);
  const [offlineLibrarySync, setOfflineLibrarySync] = useState('Daily');
  const [autoDeleteCachedData, setAutoDeleteCachedData] = useState(false);
  const [sleepTimer, setSleepTimer] = useState(0);

  const handleAutoSelectQualityChange = () => {
    setAutoSelectQuality(!autoSelectQuality);
  };

  const handleUserGuideChange = () => {
    setUserGuide(!userGuide);
  };

  const handleStoragePermissionChange = () => {
    setStoragePermission(!storagePermission);
  };

  const handleStereoModeChange = () => {
    setStereoMode(!stereoMode);
  };

  const handleDownloadSongsChange = () => {
    setDownloadSongs(!downloadSongs);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleOfflineModeChange = () => {
    setOfflineMode(!offlineMode);
  };

  const handleLanguagePreferenceChange = (event) => {
    setLanguagePreference(event.target.value);
  };

  const handleThemeSelectionChange = (event) => {
    setThemeSelection(event.target.value);
  };

  const handleEqualizerSettingsChange = (setting, value) => {
    setEqualizerSettings({ ...equalizerSettings, [setting]: value });
  };

  const handleCrossfadePlaybackChange = () => {
    setCrossfadePlayback(!crossfadePlayback);
  };

  const handleLyricsDisplayChange = () => {
    setLyricsDisplay(!lyricsDisplay);
  };

  const handleSocialMediaSharingChange = () => {
    setSocialMediaSharing(!socialMediaSharing);
  };

  const handleStreamOverMobileDataChange = () => {
    setStreamOverMobileData(!streamOverMobileData);
  };

  const handleExplicitContentFilterChange = () => {
    setExplicitContentFilter(!explicitContentFilter);
  };

  const handleAutoPlayNextSongChange = () => {
    setAutoPlayNextSong(!autoPlayNextSong);
  };

  const handleBackgroundPlayChange = () => {
    setBackgroundPlay(!backgroundPlay);
  };

  const handleAutoUpdateLibraryChange = () => {
    setAutoUpdateLibrary(!autoUpdateLibrary);
  };

  const handleOfflineLibrarySyncChange = (event) => {
    setOfflineLibrarySync(event.target.value);
  };

  const handleAutoDeleteCachedDataChange = () => {
    setAutoDeleteCachedData(!autoDeleteCachedData);
  };

  const handleSleepTimerChange = (event) => {
    setSleepTimer(event.target.value);
  };

  return (
    <Stack p={'0.5em 1em 0.5em 1em'} width={'-webkit-fill-available'} height={'-webkit-fill-available'} alignItems={'flex-start'} overflow={'scroll'}>
      <Typography variant='h5'>
        Settings
      </Typography>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Auto select quality of song</span>
          <Switch
            {...label}
            checked={autoSelectQuality}
            onChange={handleAutoSelectQualityChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Show User Guide</span>
          <Switch
            {...label}
            checked={userGuide}
            onChange={handleUserGuideChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Storage Permission</span>
          <Switch
            {...label}
            checked={storagePermission}
            onChange={handleStoragePermissionChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Stereo Mode</span>
          <Switch
            {...label}
            checked={stereoMode}
            onChange={handleStereoModeChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Download Songs for Offline Listening</span>
          <Switch
            {...label}
            checked={downloadSongs}
            onChange={handleDownloadSongsChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Enable Notifications</span>
          <Switch
            {...label}
            checked={notifications}
            onChange={handleNotificationsChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Offline Mode</span>
          <Switch
            {...label}
            checked={offlineMode}
            onChange={handleOfflineModeChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Language Preference</span>
          <select value={languagePreference} onChange={handleLanguagePreferenceChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more language options as needed */}
          </select>
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Theme Selection</span>
          <select value={themeSelection} onChange={handleThemeSelectionChange}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Equalizer Settings</span>
          <div>
            <label>Bass: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={equalizerSettings.bass}
              onChange={(e) => handleEqualizerSettingsChange('bass', e.target.value)}
            />
          </div>
          <div>
            <label>Treble: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={equalizerSettings.treble}
              onChange={(e) => handleEqualizerSettingsChange('treble', e.target.value)}
            />
          </div>
          <div>
            <label>Balance: </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={equalizerSettings.balance}
              onChange={(e) => handleEqualizerSettingsChange('balance', e.target.value)}
            />
          </div>
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Crossfade Playback</span>
          <Switch
            {...label}
            checked={crossfadePlayback}
            onChange={handleCrossfadePlaybackChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Lyrics Display</span>
          <Switch
            {...label}
            checked={lyricsDisplay}
            onChange={handleLyricsDisplayChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Social Media Sharing</span>
          <Switch
            {...label}
            checked={socialMediaSharing}
            onChange={handleSocialMediaSharingChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Stream Over Mobile Data</span>
          <Switch
            {...label}
            checked={streamOverMobileData}
            onChange={handleStreamOverMobileDataChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Explicit Content Filter</span>
          <Switch
            {...label}
            checked={explicitContentFilter}
            onChange={handleExplicitContentFilterChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Auto-Play Next Song</span>
          <Switch
            {...label}
            checked={autoPlayNextSong}
            onChange={handleAutoPlayNextSongChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Background Play</span>
          <Switch
            {...label}
            checked={backgroundPlay}
            onChange={handleBackgroundPlayChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Auto-update Library</span>
          <Switch
            {...label}
            checked={autoUpdateLibrary}
            onChange={handleAutoUpdateLibraryChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Offline Library Sync</span>
          <select value={offlineLibrarySync} onChange={handleOfflineLibrarySyncChange}>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            {/* Add more sync options as needed */}
          </select>
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Auto-delete Cached Data</span>
          <Switch
            {...label}
            checked={autoDeleteCachedData}
            onChange={handleAutoDeleteCachedDataChange}
            color="success"
          />
        </Typography>
      </Box>
      <Box mt={'1em'}>
        <Typography variant='h7'>
          <span>Sleep Timer</span>
          <select value={sleepTimer} onChange={handleSleepTimerChange}>
            <option value="0">Off</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            {/* Add more sleep timer options as needed */}
          </select>
        </Typography>
      </Box>
      {/* Add more settings options as needed */}
    </Stack>
  );
};

export default Setting;
