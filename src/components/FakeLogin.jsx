import useField from "../hooks/useField"
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import { Link, useSearchParams } from 'react-router-dom';

const FakeLogin = ({}) => {
  const [ searchParams ] = useSearchParams();

  const usernameField = useField('text')
  const passwordField = useField('password')

  return (
      <div>
        <Card className="max-w-[70%] m-auto">
          <CardContent className="flex gap-2 flex-col">
            <Typography gutterBottom variant="h3" component="div">
              Log In { searchParams.get('service') }
            </Typography>
            <p className="">
              Please log in using your { searchParams.get('service') } credentials
            </p>
            <div className="flex flex-col gap-2 mt-4 w-[60%]">
              <TextField
                label="username"
                {...usernameField}
              />

              <TextField
                label="password"
                {...passwordField}
              />
            </div>
              <Button
                component={Link}
                disabled={!(usernameField.value && passwordField.value)} 
                to={{pathname: '/congratulations', search: `user=${usernameField.value}&password=${passwordField.value}`}}
              >
                Log In
              </Button>
          </CardContent>
        </Card>
      </div>
    )
}

export default FakeLogin