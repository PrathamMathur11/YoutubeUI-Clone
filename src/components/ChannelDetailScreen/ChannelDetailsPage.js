import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ChannelDetailsPage = ({ data }) => {
  let { username } = useParams()
  return (
    <>
      {data.map(item => {
        if (item.username === username)
          return (
            <MainContainer>
              <div className='channel-header'>
                <Banner
                  className='banner '
                  style={{ background: `url(${item.thumbnail})` }}
                ></Banner>
                <ChannelDetailsCard
                  style={{
                    padding: '40px 50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  // expand={expanded}
                  // onClick={handleExpandClick}
                  // aria-expanded={expanded}
                  // aria-label='show more'
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      className='inner'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Avatar
                        sx={{ width: 80, height: 80 }}
                        src={item.channelPic}
                      >
                        {/* {channelName.slice(0, 1)} */}
                      </Avatar>
                      <Typography
                        sx={{
                          ml: 2,
                          width: '100%',
                          fontWeight: 400,
                          color: 'white',
                          fontSize: '24px'
                        }}
                      >
                        {item.channelName}
                      </Typography>
                    </div>
                    <SubscribeButton title='subscribe'>
                      <span>Subscribe</span>
                    </SubscribeButton>
                  </div>
                </ChannelDetailsCard>
              </div>
            </MainContainer>
          )
        return null
      })}
    </>
  )
}

export default ChannelDetailsPage

const MainContainer = styled.div``
const Banner = styled.div`
  position: relative;
  width: 100%;
  max-height: 40vh;
  aspect-ratio: 1;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  border-radius: 0;
  cursor: pointer;
`
const ChannelDetailsCard = styled.div``

const SubscribeButton = styled.button`
  background: #c00;
  color: #fff;
  border: none;
  border-radius: 2px;

  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 16px;
    font-size: 14px;
  }
`
