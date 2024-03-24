import { Box, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          p: 2
        }}
      >
        <Typography variant="h6">My-todo-app</Typography>
      </AppBar>
    </Box>
  )
}

export default Header
