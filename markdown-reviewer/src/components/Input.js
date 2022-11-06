import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeText } from '../redux/ReviewSlice'

const Input = () => {
  const dispatch = useDispatch();
  const text = useSelector(state=> state.reviews.text)
  console.log(text);
  return (
    <textarea className='input_container' onChange={(event)=>dispatch(changeText(event.target.value))} value={text}/>
  )
}

export default Input