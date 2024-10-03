import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SortByStatus from './SortByStatus';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DarkMode, Image, LightMode } from '@mui/icons-material';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function SearchAppBar({ setFilterStatus, setSearchTerm, theme, onThemeChange }) {
  const [wallpaper, setWallpaper] = React.useState('');
  const handleChange = (event) => {
    setWallpaper(event.target.value);
    document.querySelector('body').style.backgroundImage = `url(${event.target.value})`;
    console.log(document.querySelector('body').style.backgroundImage);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ justifyContent: 'space-between', transition:'0.3s', backdropFilter: 'blur(100px)', backgroundColor: theme? 'rgba(0,0,0,0.6)' : 'rgba(255,255, 255,0.7)', boxShadow: '0px 0px 0px' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box className='flex'>
            <SortByStatus setFilterStatus={setFilterStatus} theme={theme} />
            <FormControl sx={{ m: 1, width: 70 }} size="small">
              <InputLabel id="demo-select-small-label" sx={{ color: 'white' }}><Image sx={{color:theme? 'white' : '#555', transition:'0.3s'}} /></InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={wallpaper}
                sx={{ height: 40, overflow: 'hidden', display:'flex', backgroundColor: theme? '#202020' : '#eef', color:theme? 'white':'black', transition:'0.3s', width: '52px', display: 'flex' }}
                onChange={handleChange}
              >
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/windows_11_abstract_background_2-wallpaper-3554x1999.jpg'><img src="/src/assets/img/windows_11_abstract_background_2-wallpaper-3554x1999.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/thumb-1920-1276648.png'><img src="/src/assets/img/thumb-1920-1276648.png" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/nature-green-leaves-plants-wallpaper-6970d8cd111aed9b36a7489f80b1764d.jpg'><img src="/src/assets/img/nature-green-leaves-plants-wallpaper-6970d8cd111aed9b36a7489f80b1764d.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/Bloom-wallpaper-Dark-1536x960.jpg'><img src="/src/assets/img/Bloom-wallpaper-Dark-1536x960.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/Bloom-wallpaper-Light-1536x960.jpg'><img src="/src/assets/img/Bloom-wallpaper-Light-1536x960.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/4k-ultra-hd-background-lake-sunset-sky-dusk-colorful-dark-tr.jpg'><img src="/src/assets/img/4k-ultra-hd-background-lake-sunset-sky-dusk-colorful-dark-tr.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/pexels-sohi-807598.jpg'><img src="/src/assets/img/pexels-sohi-807598.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/258_Comics_Wallpaper_3840x2160px.jpg'><img src="/src/assets/img/258_Comics_Wallpaper_3840x2160px.jpg" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: 'white', ":hover": { backgroundColor: '#202020', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/image.png'><img src="/src/assets/img/image.png" className='max-w-20 h-[100%] ml-[-14px] rounded-md pb-[0px] hover:scale-110' alt="" /></MenuItem>
                <MenuItem sx={{ color: theme? 'white':'black', ":hover": { backgroundColor: theme? '#202020' :'#aaa', }, backgroundColor: theme? '#202020' : '#ddd', display: 'flex', padding: '2px 5px 2px 20px', width: '100%' }} value='src/assets/img/image.pn'>None</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className='flex gap-x-1'>
            <Search sx={{ backgroundColor: theme? '#00000090' : '#ffffff90', transition:'0.3s', color: theme? 'white' : 'black', ":hover": { backgroundColor: theme? '#000000' : '#fff' }, ":focus-within": { backgroundColor: theme? '#000000' : '#fff' } }}>
              <SearchIconWrapper>
                <SearchIcon sx={{color: theme? 'white' : 'black', transition:'0.3s'}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Search>
            <Button sx={{ borderRadius:'50px', color:'white'}} onClick={onThemeChange} >
              {theme? <LightMode sx={{color:'white'}} /> : <DarkMode sx={{color: '#00a'}} />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
