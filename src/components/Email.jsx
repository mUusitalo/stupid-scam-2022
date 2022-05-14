import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Card, CardContent, Typography, Link, Avatar } from "@mui/material";
import faker from '@faker-js/faker'

import generateRandomMessage from '../utilities/generateRandomMessage';
import profileImage from '../assets/kuva.jpg'

const Email = () => {
  const [ searchParams ] = useSearchParams()
  
  const email = searchParams.get('email')
  const service = searchParams.get('service')
  const [message, setMessage] = useState(null)

  const newScam = () => {
    window.location.reload();
  }

  useEffect(() => {
      generateRandomMessage({email, service})
        .then(message => setMessage(message))
  }, [])

  const { introduction, weatherText, bodyText, signOff, title, ending } = message ?? {}

  return (
      <div>
        <Card className="m-10">
          {message && 
            <CardContent>
              <div className="flex flex-row gap-4 align-middle mb-4">
                <Avatar className="align-middle" sx={{width: 56, height: 56}} src={faker.internet.avatar()}></Avatar>
                <Typography className="align-middle my-auto" gutterBottom variant="h4" component="div">
                  {title}
                </Typography>
              </div>
              <p>{introduction}</p>
              <p>{weatherText}</p>
              <p>{bodyText}</p>
              <p>{signOff}</p>
              <p>{ending}</p>
              <div className="mt-4 flex gap-4 flex-row">
                <Button component={RouterLink} variant="contained" color="success" to={{pathname: '/login', search: `email=${searchParams.get('email')}&service=${service}`}}>
                  I believe this guy
                </Button>
                <Button variant="outlined" color="error" onClick={newScam}>
                  It's a scam
                </Button>
              </div>
            </CardContent>
          }
        </Card>
      </div>
  )
}



//export default Header;
//}

export default Email