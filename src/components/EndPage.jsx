import faker from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'

import useField from "../hooks/useField"
import generateRandomMessage from '../utilities/generateRandomMessage'

const EndPage = ({}) => {
  const serviceField = useField('text')
  const emailField = useField('text')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => setVisible(false), 5000)
  }, [])

  return (
    <div>
      <h1 className="font-bold">Congratulations!</h1>
      <label>
        <p className="">I remembered your password. It is:</p>
        {visible && <p>{`${faker.animal.type()}${faker.animal.type()}${faker.datatype.number(100)}`}</p>}
      </label>
      <label>
        <p>Forgot it again? Too bad</p>
        <Button component={Link} to={{pathname: '/'}}>
          Try again
        </Button>
      </label>
    </div>
  )
}

export default EndPage