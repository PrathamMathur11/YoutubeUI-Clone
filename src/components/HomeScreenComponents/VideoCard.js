import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Tooltip } from '@mui/material'
import styled from 'styled-components'
import WatchLaterOutlined from '@mui/icons-material/WatchLaterOutlined'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'

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

// function SetToZero () {
//   const video = document.getElementsByTagName('video')
//   video.currentTime = 0

//   // console.log(video.currentTime)
// }

export default function VideoCard ({ data }) {
  const {
    id,
    title,
    channelName,
    thumbnail,
    videosrc,
    views,
    time,
    channelPic,
    username
  } = data

  // console.log(id, title, channelName, thumbnail, views, time)

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  // }

  // let n = 50
  return (
    <Card
      // onMouseOver={handleExpandClick}
      // expand={expanded}
      // aria-expanded={expanded}
      // aria-label='show more'
      className='.card'
      key={id}
      sx={{
        position: 'relative',
        maxWidth: 330,
        width: '24%',
        minWidth: 305,
        height: '100%',
        maxHeight: 340,
        m: '5px',
        mt: '40px',
        // background: '#181818',
        bgcolor: 'CaptionText',
        color: 'white',
        '&:hover': {
          transform: 'scale(1.15)',
          transition: 'transform 500ms cubic-bezier(0.4,0,0.2,1) 2000ms',
          // background: 'rgba(0, 0, 0, 1)',
          border: '3px solid rgb(128 128 128 / 40%)',
          bgcolor: '#202020',
          zIndex: '200',
          cursor: 'pointer',
          boxShadow:
            '0 2px 5px 0 rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 20%)',
          '.more': {
            opacity: 1
          },
          '.video-hover': {
            transition: 'all 500ms cubic-bezier(0.4,0,0.2,1) 3000ms',
            opacity: 1
          }
        }
      }}
    >
      <Wrap className='item-container' style={{ width: '100%', height: '57%' }}>
        <img
          className='card-img'
          src={thumbnail}
          onClick={() => (window.location.href = '/videos/' + id)}
          alt=''
        />
        <video
          // onMouseOut={SetToZero}
          className='video-hover'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          onClick={() => (window.location.href = '/videos/' + id)}
        >
          <source src={videosrc} type='video/mp4' />
        </video>
      </Wrap>
      <CardHeader
        sx={{ py: 1, px: 0.5 }}
        // expand={expanded}
        // onClick={handleExpandClick}
        // aria-expanded={expanded}
        // aria-label='show more'
        avatar={
          <Avatar
            onClick={() => (window.location.href = '/channel/' + username)}
            src={channelPic}
          >
            {/* {channelName.slice(0, 1)} */}
          </Avatar>
        }
        title={
          <Typography
            onClick={() => (window.location.href = '/videos/' + id)}
            sx={{ width: '100%', fontWeight: 500 }}
          >
            {title.slice(0, 58) + '...'}
          </Typography>
        }
        subheader={
          <Box
            onClick={() => (window.location.href = '/channel/' + username)}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Typography variant='caption' color='white'>
              {channelName}
            </Typography>

            <Typography
              onClick={() => (window.location.href = '/videos/' + id)}
              variant='caption'
              color='gray'
            >
              {nFormatter(views)} • {time}
            </Typography>
          </Box>
        }
        action={
          <ActionButtons style={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton
              className='more'
              sx={{
                color: 'white',
                opacity: 0
              }}
              aria-label='settings'
              // onClick={handleExpandClick}
            >
              <MoreVertIcon />
            </IconButton>

            <Tooltip title='Watch Later'>
              <IconButton
                sx={{
                  color: 'white',
                  opacity: 0
                }}
                className='moreOnHover'
                size='large'
              >
                <WatchLaterOutlined />
              </IconButton>
            </Tooltip>

            <Tooltip title='Add to Queue'>
              <IconButton
                sx={{
                  color: 'white',
                  opacity: 0
                }}
                className='moreOnHover'
                size='large'
              >
                <PlaylistPlayIcon />
              </IconButton>
            </Tooltip>
          </ActionButtons>
        }
      />
    </Card>
  )
}

const Wrap = styled.div`
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }

  video {
    object-fit: cover;
    ${'' /* object-position: 50% 50%; */}
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 57%;
    opacity: 0;
    aspect-ratio: 0;
    border-radius: 4px 4px 0 0;
    ${'' /* border: 1px solid red; */}
    cursor: pointer;
    overflow: hidden;
  }

  &:hover {
    ${'' /* transform: scale(1.08); */}
    video {
      border-radius-top-left: 0;
      border-radius-top-right: 0;
      opacity: 1;
      ${'' /* @media only screen and (max-width: 500px) {
        height: 101%;
        width: 85%;
      } */}
    }
  }
`

const ActionButtons = styled.div`
  .moreOnHover {
    &:hover {
      opacity: 1;
    }
  }
`
