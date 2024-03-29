import React, {useState, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../images/Logo.png'
import './index.css'

const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate()

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`)
  }, [navigate, value])
  return <div>
    <img src={Logo} alt="Logo" className="logo"/>
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      type='text' 
      placeholder='Enter Room Code'
      className="input"
    />
    <button onClick={handleJoinRoom} className="button">Join</button>
  </div>
}

export default HomePage
