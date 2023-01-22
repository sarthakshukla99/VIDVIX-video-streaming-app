import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {logo} from '../utils/logo';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position: 'stick', background: '#000', top:0, justifyContent: 'space-between'}} >
        
        <Link to='/' style={{display: 'flex', alignItems:'center'}}>
            <img src={logo} alt="vidvix" height={50} style={{borderRadius: '6px'}} />
        </Link>

        <SearchBar/>
    </Stack>
  )
}

export default Navbar