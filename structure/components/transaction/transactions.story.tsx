import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { Transactions } from './transactions'
import data from '../../config/data'

storiesOf('Transactions', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Transaction Card" usage="Show Payment Transaction Record">
        <Transactions data={data.payments} />
      </UseCase>
    </Story>
  ))
