import { useState } from 'react'

const Parent = () => {
  const [value, setValue] = useState('')

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div>
      <Sibling1 onChange={handleChange} />
      <Sibling2 value={value} />
    </div>
  )
}


const Sibling1 = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  )
}

const Sibling2 = ({ value}) => {
  return (
    <span>Value is: {value || '<Not set>'}</span>
  )
}
