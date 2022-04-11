import React from 'react'
import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth">
      <div className='Auth-container'>
        <h1 className='Auth-container__header'>Authorization</h1>
        <form className="Auth-container__form">
          <div className='Auth-container__block'>
            <input type="text" className='Auth-container__input'/>
            <input type="text" className='Auth-container__input'/>
          </div>
          <button className='Auth-container__btn'>Enter</button>
          <button className='Auth-container__btn'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Auth