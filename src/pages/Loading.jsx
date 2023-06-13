import React from 'react'

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:'center'}}>
      <CircularProgress color="inherit" />
    </div>
  )
}
