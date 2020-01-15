import * as React from 'react'
import {Button} from 'antd'
import {useState} from 'react'


//type Props = {
//  buttonText: string
//}
//
//const Button: React.FC<Props> = (props) => {
//  let [count, setCount] = useState(0)
//  // bad practice
//  return <button onClick={() => setCount(prev => prev + 1)}>{props.buttonText} {count}</button>
//}

//interface Person {
//  name: 'rashomon'
//}
//
//interface Rashomon: Person = {
//  name: 'rashomon',
//}


//export default Button
export default () => <Button type='primary'>Hoge</Button>
