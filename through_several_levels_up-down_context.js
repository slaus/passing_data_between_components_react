import { useState, useContext, createContext } from 'react'

// создаем контекст
const ValueContext = createContext()

// Component1 записывает данные в контекст ValueContext
const Component1 = () => {
  const { setValue } = useContext(ValueContext)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  )
}

// Component2 читает данные из контекста ValueContext
const Component2 = () => {
  const { value } = useContext(ValueContext)

  return (
    <span>Value is: {value || '<Not set>'}</span>
  )
}

// компоненты, которым необходим доступ к контексту,
// должны быть обернуты в Provider
export default function App() {
  const [value, setValue] = useState('')

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <Component1 />
      <Component2 />
    </ValueContext.Provider>
  )
}
