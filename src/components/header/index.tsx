import { currentDateString } from '@/utils'
import { Box, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Link from 'next/link'

const Header = () => {
  const currentDate = currentDateString()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          p: 2
        }}
      >
        <Typography variant="h6">My-todo-app</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/">
            <Typography
              sx={{
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'black'
                }
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href={`/${currentDate}`}>
            <Typography
              sx={{
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'black'
                }
              }}
            >
              Today&apos;s TODO
            </Typography>
          </Link>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header
