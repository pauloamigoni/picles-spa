import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
     
      <div style={{display: 'flex', gap: '10px', flexDirection: 'row', alignItems: 'center'}}>
        {count}
        <Button variant={ButtonVariant.Default} onClick={() => setCount((count) => count +1)}> Default </Button>
        <Button variant={ButtonVariant.Outlined} onClick={() => setCount((count) => count +1)}> Outlined </Button>
        <Button variant={ButtonVariant.Disabled} onClick={() => setCount((count) => count +1)}> Disabled </Button>
        <Button variant={ButtonVariant.Text} onClick={() => setCount((count) => count +1)}> Text</Button>
      </div>
    

   
  )
}
