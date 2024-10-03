import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SwapVert } from '@mui/icons-material';

export default function SortByStatus({ setFilterStatus, theme }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
      <InputLabel id="demo-select-small-label" sx={{ color: 'white' }}><SwapVert sx={{ fontSize: '35px', marginX: '-8.5px', marginTop: '-5px', color: theme ? 'white':'black'}} /></InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        sx={{ color: theme? 'white' :'black', transition:'0.3s' }}
        label="1"
        onChange={((event) => setFilterStatus(event.target.value))}
      >
        <MenuItem sx={{color:'gray', backgroundColor: theme? '#000': '#fff', ":hover":{backgroundColor: theme? '#111': '#fff'}}} value='All'>All</MenuItem>
        <MenuItem sx={{color:'gray', backgroundColor: theme? '#000': '#fff', ":hover":{backgroundColor: theme? '#111': '#fff'}}} value='incomplete'>Active</MenuItem>
        <MenuItem sx={{color:'gray', backgroundColor: theme? '#000': '#fff', ":hover":{backgroundColor: theme? '#111': '#fff'}}} value='completed'>Inactive</MenuItem>
        <MenuItem sx={{color:'gray', backgroundColor: theme? '#000': '#fff', ":hover":{backgroundColor: theme? '#111': '#fff'}}} value='stared'>Starred</MenuItem>
      </Select>
    </FormControl>
  );
}