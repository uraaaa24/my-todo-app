import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Checkbox, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material'
import { useId, useState } from 'react'

export type ColumnItem<T extends string> = {
  key: T
  label: string
  isShow: boolean
}

type ViewColumnMenuProps<T extends string> = {
  buttonLabel: string
  menuItems: ColumnItem<T>[]
  onClickMenuItem: (item: ColumnItem<T>) => void
}

const ViewColumnMenu = <T extends string>(props: ViewColumnMenuProps<T>) => {
  const id = useId()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        endIcon={
          <Box display="flex" alignItems="center">
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        }
      >
        {props.buttonLabel}
      </Button>

      <Menu id={id} anchorEl={anchorEl} open={open} onClose={handleClose}>
        {props.menuItems.map((item, i) => {
          const labelId = `checkbox-list-label-${i}`
          return (
            <ListItemButton key={item.key} onClick={() => props.onClickMenuItem(item)}>
              <ListItemIcon>
                <Checkbox checked={item.isShow} inputProps={{ 'aria-labelledby': labelId }} size="small" />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.label} />
            </ListItemButton>
          )
        })}
      </Menu>
    </>
  )
}

export default ViewColumnMenu
