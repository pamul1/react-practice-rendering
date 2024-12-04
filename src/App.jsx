import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BookList } from './Component/BookList'

function App() {
  const [book, setBook] = useState(0)

  return (
    <>
      <BookList></BookList>
    </>
  )
}

export default App
