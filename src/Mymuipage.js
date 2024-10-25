import React, { Fragment } from 'react'
import { Button } from '@mui/material'
import { FaHome } from "react-icons/fa";
import { FcDisclaimer } from "react-icons/fc";

function Mymuipage() {
  return (
   <Fragment>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<h1><FcDisclaimer/></h1>
<h2> <FaHome/> </h2>




   </Fragment>
  )
}

export default Mymuipage