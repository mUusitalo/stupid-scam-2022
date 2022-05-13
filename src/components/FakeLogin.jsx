import useField from "../hooks/useField"
import { useSearchParams } from 'react-router-dom';

const FakeLogin = ({}) => {
  const [ searchParams ] = useSearchParams();

  const emailField = useField('text')
  const passwordField = useField('password')

  emailField.value = searchParams.get('email')

  const onLogin = event => {
    event.preventDefault()
    
    alert(`Got it!, ${passwordField.value}`)
  }

  return (
      <div>
        <h1>Log In</h1>
        <h2>app name here</h2>
        <form onSubmit={onLogin}>
            <fieldset>
                <label>
                    email:
                    <input {...emailField} />
                </label>

                <label>
                    password:
                    <input {...passwordField} />
                </label>
            </fieldset>
            <button type="submit">Log In</button>
        </form>
      </div>
    )
}

export default FakeLogin