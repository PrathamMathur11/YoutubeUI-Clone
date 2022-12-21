import React from 'react'
// import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import ViewCard from './ViewCard.js'

const VideoViewScreen = ({ data }) => {
  let { id } = useParams()
  id = Number(id)
  return (
    <Container
      // key={data.id}
      maxWidth='xl'
      sx={{ mt: 1, px: 3, display: 'flex', gap: '24px' }}
    >
      {data.map(item => {
        if (item.id === id) {
          return (
            <>
              <ViewCard key={item.id} item={item} data={data} />
            </>
          )
        }
        return null
      })}
    </Container>
  )
}

export default VideoViewScreen
