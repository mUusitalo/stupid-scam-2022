import useField from "../hooks/useField"
import { Link } from "react-router-dom";


const Homepage = ({}) => {
  const serviceField = useField('text')
  const emailField = useField('text')

  const onSubmit = () => {

  }

  return (
      <div>
        <h1 className="font-bold">Password recovery tool</h1>
        <form>
          <label>
            <p className="">service name</p>
            <input {...serviceField} />
          </label>
          <label>
            <p>email</p>
            <input {...emailField} />
          </label>
          <Link to={{pathname: '/mail', search: `email=${emailField.value}`}}>
            <button>Recover password</button>
          </Link>
        </form>
        
      </div>
    )
}

export default Homepage