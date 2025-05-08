import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Box from './component/Box'



function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)



  const increase = () => {
    dispatch({type: 'INCREMENT', payload:{num: 5}})
    
  }

  const login = () => {
    dispatch({type: 'LOGIN', payload:{id: 'byeong-9', password: '123'}})
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{password},{id}</h1>
      <button onClick ={increase}>증가!</button>
      <button onClick ={login}>로그인~</button>
      
      <Box/>
    </div>
  );
}

export default App;
