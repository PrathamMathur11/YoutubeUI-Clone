import { Container } from '@mui/system'
import React from 'react'
import VideoCard from './VideoCard'

const AllVideos = ({ data}) => {
  return (
    <Container
      maxWidth='xxl'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        px: '0px !important'
      }}
    >
      {data.map(data => {
        return <VideoCard data={data} />
      })}
    </Container>
  )
}

export default AllVideos
