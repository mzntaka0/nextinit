import * as React from 'react'
import {storiesOf} from '@storybook/react'

import Button from './index'


storiesOf('Button', module)
  .add('With text', () => <Button buttonText="Hello World!" />)
  .add('With text2', () => <Button buttonText="yay!" />)
