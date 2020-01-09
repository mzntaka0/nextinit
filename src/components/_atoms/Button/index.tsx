import * as React from 'react'
import {useState} from 'react'


type Props = {
  buttonText: string
}

const Button: React.FC<Props> = (props) => {
  let [count, setCount] = useState(0)
  // bad practice
  return <button onClick={() => setCount(prev => prev + 1)}>{props.buttonText} {count}</button>
}



export default Button
