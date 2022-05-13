import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import faker from '@faker-js/faker'

import getRandomMessage from '../utilities/generateRandomMessage';
import profileImage from '../assets/kuva.jpg'

const Email = ({}) => {
  const [ searchParams ] = useSearchParams()
  
  const { introduction, bodyText, signOff, title, ending} = getRandomMessage()
  return (
      <div>
        <h1 className="font-bold">{title}</h1>
            <p>{introduction}</p>
            <p>{bodyText}</p>
            <p>{signOff}</p>
            <p>{ending}</p>
            <Link to={{pathname: '/login', search: `email=${searchParams.get('email')}`}}>
                <button>Recover password</button>
            </Link>
            
            <img src={profileImage}></img>
        </div>
  )
}



//export default Header;
//}

export default Email