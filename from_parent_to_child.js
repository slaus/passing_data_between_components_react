import { useState } from 'react'

const Parent = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
       <input
         type="text"
         onChange={handleChange }
       />
      {/* передаем проп в дочерний компонент */}
      <Child value={value} />
    </div>
  )
}

const Child = ({ value }) => {
  return (
    <span>Value is: {value || '<Not set>'}</span>
  )
}
