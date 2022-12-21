import * as React from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// import MailIcon from '@mui/icons-material/Mail'
import {
  Autocomplete,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  TextField,
  Tooltip
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
// import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
// import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { SideBarData } from './SideBarData'
import YouTubeIcon from '@mui/icons-material/YouTube'
// import FilterTile from './FilterTile'
// import AllVideos from './AllVideos'
import { red } from '@mui/material/colors'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'

//drawer stuff
const drawerWidth = 240

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 15px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 15px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: '#202020',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

// AppBar Stuff

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: '#202020',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

//search stuff
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 10px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'hsl(0, 0%, 7%)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    maxWidth: '500px'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(Autocomplete)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: '20vh'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '60vh'
    }
  }
}))

export default function NavBar ({ data }) {
  const [autoCompleteData, setAutoCompleteData] = React.useState([])

  React.useEffect(() => {
    setAutoCompleteData(data)
  }, [data])

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <VideoCallOutlinedIcon />
          </Badge>
        </IconButton>

        <p>Create</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <Avatar src='' sx={{ bgcolor: red[500] }}>
            R
          </Avatar>
        </IconButton>

        <p>Random</p>
      </MenuItem>
    </Menu>
  )
  return (
    <>
      <CssBaseline />
      <AppBar className='header' position='fixed' open={open}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 1,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <YouTubeIcon
            onClick={() => (window.location.href = '/')}
            sx={{
              ...(open && { display: 'none' }),
              color: 'rgb(255,0,0)',
              width: 35,
              height: 35,
              ml: 1.5,
              cursor: 'pointer'
            }}
          />
          <Typography
            onClick={() => (window.location.href = '/')}
            className='logo'
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: { sm: 'block' },
              cursor: 'pointer',
              marginLeft: '3px',
              ...(open && { display: 'none' })
            }}
          >
            YouTube
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              freeSolo
              id='free-solo-2-demo'
              disableClearable
              options={autoCompleteData.map(option => option.title)}
              renderInput={params => (
                <TextField
                  {...params}
                  // label='Search...'
                  placeholder='Search...'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search'
                  }}
                />
              )}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title='Create' placement='bottom'>
              <IconButton
                size='large'
                aria-label='show 4 new mails'
                color='inherit'
              >
                <Badge badgeContent={4} color='error'>
                  <VideoCallOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title='Notifications' placement='bottom'>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={17} color='error'>
                  <NotificationsOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title='User Profile' placement='bottom'>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
              >
                <Avatar src='' sx={{ bgcolor: red[500] }}>
                  R
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          '& .MuiPaper-root': {
            background: '#202020'
          }
        }}
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: 'flex-start' }}>
          <IconButton sx={{ marginRight: 1 }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <MenuIcon sx={{ color: 'white' }} />
            ) : (
              <MenuIcon sx={{ color: 'white' }} />
            )}
          </IconButton>
          <YouTubeIcon
            onClick={() => (window.location.href = '/')}
            sx={{
              mr: '3px',
              color: 'rgb(255,0,0)',
              width: 35,
              height: 35,
              cursor: 'pointer',
              ml: 1.5
            }}
          />
          <Typography
            onClick={() => (window.location.href = '/')}
            className='logo'
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: { sm: 'block' },
              marginLeft: '3px',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            YouTube
          </Typography>
        </DrawerHeader>
        <Divider sx={{ background: '#202020' }} />
        <List sx={{ background: '#202020', color: 'white' }}>
          {SideBarData.slice(0, 4).map(({ id, title, icon }) => (
            <ListItem key={id} disablePadding sx={{ display: 'block' }}>
              <Tooltip placement='right' title={title}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: 'white',
                      mr: open ? 3 : 'auto',
                      mt: open ? 'auto' : 3,
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontFamily: 'Roboto',
                      fontSize: '0.8rem'
                    }}
                  >
                    <div>{icon}</div>
                    <Typography
                      variant='small'
                      sx={{ display: open ? 'none' : 'block' }}
                    >
                      {title}
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider
          sx={{
            background: 'rgba(255, 255, 255, 0.1);',
            display: open ? 'block' : 'none'
          }}
        />
        <List sx={{ background: '#202020', color: 'white' }}>
          {open
            ? SideBarData.slice(4, 9).map(({ id, title, path, icon }) => (
                <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                  <Tooltip placement='right' title={title}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          color: 'white',
                          mr: open ? 3 : 'auto',
                          mt: open ? 'auto' : 3,
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          fontFamily: 'Roboto',
                          fontSize: '0.8rem'
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              ))
            : [
                {
                  id: 5,
                  title: 'Library',
                  path: '/',
                  icon: <VideoLibraryOutlinedIcon />
                }
              ].map(({ title, id, icon }) => (
                <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                  <Tooltip placement='right' title={title}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          color: 'white',
                          mr: open ? 3 : 'auto',
                          mt: open ? 'auto' : 1,
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          fontFamily: 'Roboto',
                          fontSize: '0.8rem'
                        }}
                      >
                        <div>{icon}</div>
                        <Typography
                          variant='small'
                          sx={{ display: open ? 'none' : 'block' }}
                        >
                          {title}
                        </Typography>
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              ))}
        </List>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </>
  )
}
