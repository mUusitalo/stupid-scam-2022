import useField from "../hooks/useField"
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
        <form>
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
            <Link to={{pathname: '/congratulations', search: `email=${emailField.value}`}}>
                <button type="submit">Log In</button>
            </Link>
            
        </form>
      </div>
    )
}

export default FakeLogin