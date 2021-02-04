import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const NotFoundPage = () => {
  return (
    <Box mt={6}>
      <Typography variant='h2' align='center'>
        Page not Found
      </Typography>
      <Typography variant='h1' color='secondary' align='center'>
        404
      </Typography>
    </Box>
  )
}

export default NotFoundPage
