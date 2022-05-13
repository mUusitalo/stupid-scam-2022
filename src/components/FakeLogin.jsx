import useField from "../hooks/useField"
import { FormControl, Button, TextField, Card, CardContent } from "@mui/material";
import { Link, useSearchParams } from 'react-router-dom';

const FakeLogin = ({}) => {
  const [ searchParams ] = useSearchParams();

  const emailField = useField('text')
  const passwordField = useField('password')

  emailField.value = searchParams.get('email')

  return (
      <div>
        <h1>Log In</h1>
        <h2>app name here</h2>
        <Card>
          <CardContent>
            <h1 className="font-bold">Password recovery tool</h1>
            <TextField
              label="email"
              {...emailField}
            />

            <TextField
              label="password"
              {...passwordField}
            />

            <Button component={Link} to={{pathname: '/congratulations', search: `email=${emailField.value}`}}>
                <button type="submit">Log In</button>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
}

export default FakeLogin