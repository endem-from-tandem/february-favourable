import React from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    divider: {
      backgroundColor: theme.palette.primary.light,
    },
  })
)
const Home = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} disableGutters maxWidth='md'>
      <Box mx='auto'>
        <Typography variant='h4'>
          Wellcome to
          <Box component='span' color='secondary.main'>
            {' '}
            saga
          </Box>
          !
        </Typography>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }} flexGrow={1} />
      <Box display={{ xs: 'none', md: 'block' }} maxWidth={420}>
        <Typography color='secondary' variant='h4'>
          Log
        </Typography>
        <Box width='420px' mt={2}>
          <Box mb={1}>
            <Divider className={classes.divider} />
            <Typography variant='overline'>
              Work on design
              <br />
            </Typography>
            <Typography color='secondary' variant='caption'>
              02.05.2021
            </Typography>
          </Box>
          <Box mb={1}>
            <Divider className={classes.divider} />
            <Typography variant='overline'>
              Work on content
              <br />
            </Typography>
            <Typography color='secondary' variant='caption'>
              02.05.2021
            </Typography>
          </Box>
          <Box mb={1}>
            <Divider className={classes.divider} />
            <Typography variant='overline'>
              Work on BACKEND
              <br />
            </Typography>
            <Typography color='secondary' variant='caption'>
              02.08.2021
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*}
      <Box display='flex' flexDirection='row'>
        <Box border={1} borderColor='secondary.main'>
          <Typography variant='h2'>Well cum!</Typography>
        </Box>

        <Box
          display={{ xs: 'none', md: 'block' }}
          border={1}
          borderColor='secondary.main'
          p={10}
        >
          LOG
        </Box>
      </Box>
  */}
    </Container>
  )
}

export default Home
