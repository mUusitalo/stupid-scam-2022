import useField from "../hooks/useField"
import { Link } from "react-router-dom";
import { FormControl, Button, TextField, Card, CardContent } from "@mui/material";

const Homepage = ({}) => {
  const serviceField = useField('text')
  const emailField = useField('text')

  return (
      <div className="p-10">
        <Card>
          <CardContent>
            <h1 className="font-bold">Password recovery tool</h1>
            <p className=""> Send yourself a scam email. phishing! Just enter the service and your email you want to have access to, we'll do the rest. Have you forgotten your password?</p>
            <TextField
              label="Service name"
              {...serviceField}
            />
            <TextField
              label="Your email"
              {...emailField}
            />
            <Button component={Link} to={{pathname: '/mail', search: `email=${emailField.value}`}}>
                Send new password
            </Button>
          </CardContent>
        </Card>
      </div>
    )
}

export default Homepage