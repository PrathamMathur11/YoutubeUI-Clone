// import { Box } from '@mui/material'
import './App.css'
// import AllVideos from './components/AllVideos'
// import FilterTile from './components/FilterTile'

import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import VideoViewScreen from './components/VideoScreenComponents/VideoViewScreen'
import data from './components/videosData'
import NavBar from './components/NavBarComponents/NavBar'
import ChannelDetailsPage from './components/ChannelDetailScreen/ChannelDetailsPage'
import Box from '@mui/material/Box'
import FilterTile from './components/HomeScreenComponents/FilterTile'
import AllVideos from './components/HomeScreenComponents/AllVideos'

const App = () => {
  const [mainData, setMainData] = React.useState([])

  React.useEffect(() => {
    setMainData(data)
  }, [])

  return (
    <Box sx={{ display: 'flex', background: '#181818' }}>
      <NavBar data={mainData} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 5,
          ml: -3,
          pr: 0,
          filter: 'drop-shadow(0px -22px 6px #202020)',
          boxShadow: '0px -22px 6px #202020'
        }}
      >
        <Routes>
          <Route
            path='/'
            index
            element={
              <>
                <FilterTile />
                <AllVideos data={mainData} />
              </>
            }
          />
          <Route
            path='/videos/:id'
            element={
              <>
                <VideoViewScreen data={mainData} />
              </>
            }
          />
          <Route
            path='/channel/:username'
            element={
              <>
                <ChannelDetailsPage data={mainData} />
              </>
            }
          />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
