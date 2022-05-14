import useField from "../hooks/useField"
import { Link } from "react-router-dom";
import { FormControl, Button, TextField, Card, CardContent, Typography } from "@mui/material";

const Homepage = ({}) => {
  const serviceField = useField('text')
  const emailField = useField('text')

  return (
      <div className="p-10">
        <Card>
          <CardContent className="flex gap-2 flex-col">
            <Typography gutterBottom variant="h3" component="div">
              Strong Password Scammator
            </Typography>
            <p className=""> Have you forgotten your password? Send yourself a scam email. phishing! Just enter the service and your email you want to have access to, we'll do the rest. </p>
            <div className="flex flex-col gap-2 mt-4 w-[60%]">
              <TextField 
                label="Service name"
                {...serviceField}
                />
              <TextField
                label="Your email"
                {...emailField}
                />
            </div>
              <Button disabled={!(serviceField.value && emailField.value)} variant="contained" component={Link} to={{pathname: '/mail', search: `email=${emailField.value}&service=${serviceField.value}`}}>
                Send me a scam!
              </Button>
          </CardContent>
        </Card>
      </div>
    )
}

export default Homepage