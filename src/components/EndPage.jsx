import faker from '@faker-js/faker'
import { Link, useSearchParams } from 'react-router-dom'
import { Button, TextField, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";
import { useState, useEffect } from 'react'

import useField from "../hooks/useField"
import generateRandomMessage from '../utilities/generateRandomMessage'
import Spinner from './Spinner'

const EndPage = ({}) => {
  const [ searchParams ] = useSearchParams();

  const serviceField = useField('text')
  const emailField = useField('text')
  const [progress, setProgress] = useState(100);
  const visible = progress > 0
  const [dialogVisible, setDialogVisibility] = useState(false)

  useEffect(() => {
    const timeoutID = setInterval(() => {
      setProgress(progress => Math.max(0, progress - 1))
    }, 50);

    return () => {
      clearInterval(timeoutID);
    };
  }, [])

  return (
    <div>
      <Card className="max-w-[80%] m-auto">
          <CardContent className="flex gap-2 flex-col">
            <Typography gutterBottom variant="h5" component="div">
              Congratulations!
            </Typography>
            <p className="">I remembered your password. It is:</p>
            {
              visible &&
              <div className="flex flex-col gap-2 mt-4 w-[60%]">
                <p> {searchParams.get('password')}</p>
                <Spinner value={progress} />
              </div>
            }

            <Button onClick={() => setDialogVisibility(true)}>
              I forgot it again
            </Button>
          </CardContent>
        </Card>

        <Dialog
          open={dialogVisible}
          onClose={() => setDialogVisibility(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            {"Yor passwod has been changed"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>Your new password is: </p>
              <p><b>{`${faker.animal.type()}${faker.animal.type()}${faker.datatype.number(100)}`}</b></p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogVisibility(false)} autoFocus>
              Agree
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  )
}

export default EndPage