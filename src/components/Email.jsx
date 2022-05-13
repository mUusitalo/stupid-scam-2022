import { useSearchParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Card, CardContent, Typography, Link, Avatar } from "@mui/material";
import faker from '@faker-js/faker'

import generateRandomMessage from '../utilities/generateRandomMessage';
import profileImage from '../assets/kuva.jpg'

const Email = ({}) => {
  const [ searchParams ] = useSearchParams()
  
  const email = searchParams.get('email')
  const service = searchParams.get('service')

  const { introduction, bodyText, signOff, title, ending} = generateRandomMessage({email, service})
  return (
      <div>
        <Card className="m-10">
          <CardContent>
            <div className="flex flex-row gap-4 align-middle mb-4">
              <Avatar className="align-middle" sx={{width: 56, height: 56}} src={faker.internet.avatar()}></Avatar>
              <Typography className="align-middle my-auto" gutterBottom variant="h4" component="div">
                {title}
              </Typography>
            </div>
            <p>{introduction}</p>
            <p>{bodyText}</p>
            <p>{signOff}</p>
            <p>{ending}</p>
            <div className="mt-4">
              <Link component={RouterLink} to={{pathname: '/login', search: `email=${searchParams.get('email')}&service=${service}`}}>
                  <button>Recover password</button>
              </Link>
            </div>
            
          </CardContent>
          </Card>
        </div>
  )
}



//export default Header;
//}

export default Email