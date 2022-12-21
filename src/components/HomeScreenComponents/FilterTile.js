import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import { Chip } from '@mui/material'

export default function FilterTile () {
  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', sm: '100%' },
        bgcolor: '#202020',
        paddingRight: '0'
      }}
    >
      <Tabs
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
        sx={{ paddingTop: 1 }}
      >
        {[
          { id: 1, title: 'All', check: 'true' },
          { id: 2, title: 'All', check: 'false' },
          { id: 3, title: 'All', check: 'false' }
        ].map(({ title, id, check }) => {
          return (
            <Chip
              key={id}
              label={title}
              component='a'
              sx={{
                marginRight: 1,
                fontSize: 15,
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)'
                },
                '&:focus': {
                  background: 'white',
                  color: 'black'
                }
              }}
              clickable
              defaultChecked={check}
            />
          )
        })}
      </Tabs>
    </Box>
  )
}
