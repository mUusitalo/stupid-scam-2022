import faker from '@faker-js/faker'
import useField from "../hooks/useField"
import generateRandomMessage from '../utilities/generateRandomMessage'

const EndPage = ({}) => {
  const serviceField = useField('text')
  const emailField = useField('text')
  const { introduction, bodyText, signOff } = generateRandomMessage()
 
  return (
    <div>
      <h1 className="font-bold">Congratulations!</h1>
      <label>
        <p className="">I remembered your password. It is:</p>
        <p>{faker.internet.password(15, true)}</p>
      </label>
      <label>
        <p>Forgot it again? Too bad</p>
        <button type="submit">Try again</button>
      </label>
    </div>
  )
}

export default EndPage