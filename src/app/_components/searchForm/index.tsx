import { useToDoListTableContext } from '@/context/todoListTableContext'
import SearchIcon from '@mui/icons-material/Search'
import { OutlinedInput } from '@mui/material'

/**
 * 検索条件を入力するフォーム
 */
const SearchForm = () => {
  const { setSearchCondition } = useToDoListTableContext()

  return (
    <OutlinedInput
      placeholder="Search..."
      fullWidth
      size="small"
      endAdornment={<SearchIcon />}
      onChange={(e) => setSearchCondition(e.target.value ?? '')}
    />
  )
}

export default SearchForm
