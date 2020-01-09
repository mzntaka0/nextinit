import * as React from 'react'


type Props = {
  buttonText: string
}

const Button: React.FC<Props> = (props) => <button>{props.buttonText}</button>



export default Button
