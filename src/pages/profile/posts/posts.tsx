import React, { useState } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) =>
  createStyles({
    addPost: {
      maxWidth: 600,
      margin: '0 auto',
      padding: 15,
      '& button': {
        marginTop: 10,
      },
    },
    textField: {
      color: theme.palette.grey[400],
      backgroundColor: theme.palette.primary.main,
      '& ::placeholder': {
        ...theme.typography.overline,
        fontSize: 9,
      },
    },
    icon: {
      width: 30,
      height: 30,
    },

    posts: {
      color: theme.palette.text.secondary,
      maxWidth: 600,
      margin: '0 auto',
      marginTop: 15,
    },
    post: {
      padding: 10,
      display: 'block',
      height: 200,
      marginTop: 10,
    },
  })
)

const Posts = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <Card className={classes.addPost}>
        <TextField
          className={classes.textField}
          fullWidth
          multiline
          rowsMax={17}
          variant='outlined'
          placeholder='write a saga...'
          value={value}
          InputProps={{
            className: classes.textField,
          }}
          onChange={handleChange}
        />
        <IconButton color='secondary'>
          <SendIcon className={classes.icon} color='inherit' />
        </IconButton>
      </Card>

      <Box className={classes.posts}>
        <Card className={classes.post}>Post</Card>
      </Box>
    </>
  )
}

export default Posts
