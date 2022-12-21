import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// import { maxHeight } from '@mui/system'

export default function RecommendationCard ({ data, nFormatter }) {
  const {
    id,
    title,
    thumbnail,
    videosrc,
    channelName,
    views,
    time,
    username
  } = data
  return (
    <Card
      // key={id}
      row
      variant='plain'
      sx={{
        minWidth: '400px',
        height: 120,
        my: 1,
        gap: 2,
        bgcolor: 'background.body',
        alignItems: 'center'
      }}
    >
      <CardOverflow
        sx={{ position: 'relative', width: '100%', maxHeight: 120 }}
      >
        <AspectRatio
          ratio='2'
          sx={{
            position: 'absolute',
            top: -15,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: 'inherit'
          }}
        >
          <img
            src={thumbnail}
            alt=''
            style={{ maxHeight: '100%', cursor: 'pointer' }}
            onClick={() => (window.location.href = '/videos/' + id)}
          />
          <video
            // onMouseOut={SetToZero}
            className='video-hover'
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted={true}
            onClick={() => (window.location.href = '/videos/' + id)}
            style={{
              objectFit: 'cover',
              height: 'auto',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            <source src={videosrc} type='video/mp4' />
          </video>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography
          fontWeight='md'
          textColor='success.plainColor'
          fontSize={14}
          sx={{ cursor: 'pointer' }}
          onClick={() => (window.location.href = '/videos/' + id)}
        >
          {title.slice(0, 30) + '...'}
        </Typography>

        <Typography
          variant='plain'
          fontSize={12}
          sx={{ cursor: 'pointer' }}
          onClick={() => (window.location.href = '/channel/' + username)}
        >
          {channelName}
        </Typography>

        <Typography variant='caption' fontSize={12}>
          {nFormatter(views)} • {time}
        </Typography>
      </CardContent>
      <CardOverflow variant='soft' color='primary'>
        <IconButton
          className='more'
          sx={{
            color: 'white',
            cursor: 'pointer'
          }}
          aria-label='settings'
        >
          <MoreVertIcon />
        </IconButton>
      </CardOverflow>
    </Card>
  )
}
