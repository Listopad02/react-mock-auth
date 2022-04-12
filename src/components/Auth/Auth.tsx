import './Auth.css'
import { connect } from 'react-redux'

const Auth = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="Auth">
      <div className='Auth-container'>
        <h1 className='Auth-container__header'>Authorization</h1>
        <form className="Auth-container__form" onSubmit={submitHandler}>
          <div className='Auth-container__block'>
            <input type="text" className='Auth-container__input'/>
            <input type="text" className='Auth-container__input'/>
          </div>
          <button className='Auth-container__btn'>Log In</button>
        </form>
      </div>
    </div>
  )
}

interface stateTypes {
  users: string[]
}

function mapStateToProps(state: stateTypes) {
  return {
    users: state.users
  }
}

// function mapDispatchToProps(dispatch: Dispatch<UserActions>) {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Auth)