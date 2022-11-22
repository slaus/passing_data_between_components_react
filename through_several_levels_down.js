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
      <Child_1 value={value} />
    </div>
  )
}

const Child_1 = ({ value }) => {
  return (
    {/* передаем проп в дочерний компонент */}
    <Child_2 value={value} />
  )
}

const Child_2 = ({ value }) => {
  return (
    <span>Value is: {value || '<Not set>'}</span>
  )
}
