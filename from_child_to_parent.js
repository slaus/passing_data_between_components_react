import { useState } from 'react'

const Child = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value) // callback-функция
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  )
}

const Parent = () => {
  const [value, setValue] = useState('')
  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div>
      <span>Value is: {value || '<Not set>'}</span>
      <Child onChange={handleChange} />
    </div>
  )
}
