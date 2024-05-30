/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css'

const Button = ({ text, onClick }) => {
  return (
    <li onClick={onClick}>{text}</li>
  )
}

export default Button
