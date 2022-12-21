import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import RecommendationCard from './RecommendationCard'
import { VVCGData } from './ViewVideoCardGesturesData'
// import VideoCard from './VideoCard'
// import { useTheme } from '@mui/material/styles'

function nFormatter (num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num
}

const ViewCard = ({ item, data }) => {
  //   const theme = useTheme()
  const {
    id,
    title,
    // channelName,
    // thumbnail,
    videosrc,
    views,
    time
    // channelPic
  } = item
  return (
    <>
      <Content key={id}>
        <VideoWrapper>
          <video
            style={{ objectFit: 'cover' }}
            // onMouseOut={SetToZero}
            className='video-hover'
            loop={true}
            autoPlay='auto-play'
            playsInline={true}
            height={500}
            width='100%'
            // maxWidth={1000}
            controls
            muted={true}
          >
            <source src={videosrc} type='video/mp4' />
          </video>
        </VideoWrapper>
        <Title>{title}</Title>
        <Details>
          <Info>
            {nFormatter(views)} • {time}
          </Info>
          <Buttons>
            {VVCGData.map(({ id, title, icon }) => {
              return (
                <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                  <Tooltip title={title}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: 'center',
                        px: 1
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          color: 'white',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          fontFamily: 'Roboto',
                          fontSize: '0.8rem'
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={title} sx={{}} />
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              )
            })}
          </Buttons>
        </Details>
      </Content>
      <Recommendation>
        {data.map(data => {
          return (
            <RecommendationCard
              key={data.id}
              data={data}
              nFormatter={nFormatter}
            />
          )
        })}
      </Recommendation>
    </>
  )
}

export default ViewCard

const Content = styled.div`
  flex: 5;
  color: white;
`
const Recommendation = styled.div`
  color: white;
  flex: 2;
`
const VideoWrapper = styled.div``

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: white;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Info = styled.span``
const Buttons = styled.div`
  display: flex;
`
