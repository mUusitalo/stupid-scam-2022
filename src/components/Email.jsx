import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import faker from '@faker-js/faker'

import profileImage from '../assets/kuva.jpg'

const Email = ({}) => {
  const [ searchParams ] = useSearchParams()
  
  return (
      <div>
        <h1 className="font-bold">Emal title</h1>
            <p>{faker.lorem.paragraph()}</p>
            <p>Paragraph</p>
            <p>Paragraph</p>
            <p>Paragraph</p>
            
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