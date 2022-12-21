// import * as React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import VideoViewScreen from './VideoScreenComponents/VideoViewScreen'
// import data from './videosData'
// import NavBar from './NavBarComponents/NavBar'
// import ChannelDetailsPage from './ChannelDetailScreen/ChannelDetailsPage'
// import Box from '@mui/material/Box'
// import FilterTile from './HomeScreenComponents/FilterTile'
// import AllVideos from './HomeScreenComponents/AllVideos'

// export default function MainScreenWithNav () {
//   return (
//     <Box sx={{ display: 'flex', background: '#181818' }}>
//       <NavBar data={data} />
//       <Box
//         component='main'
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           mt: 5,
//           ml: -3,
//           pr: 0,
//           filter: 'drop-shadow(0px -22px 6px #202020)',
//           boxShadow: '0px -22px 6px #202020'
//         }}
//       >
//         <Routes>
//           <Route
//             path='/'
//             index
//             element={
//               <>
//                 <FilterTile />
//                 <AllVideos data={data} />
//               </>
//             }
//           />
//           <Route
//             path='/videos/:id'
//             element={
//               <>
//                 <VideoViewScreen data={data} />
//               </>
//             }
//           />
//           <Route
//             path='/channel/:username'
//             element={
//               <>
//                 <ChannelDetailsPage data={data} />
//               </>
//             }
//           />
//         </Routes>
//       </Box>
//     </Box>
//   )
// }
