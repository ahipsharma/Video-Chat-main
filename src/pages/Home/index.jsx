import React, {useState, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate()

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`)
  }, [navigate, value])
  return <div>
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
