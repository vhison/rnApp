import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { Workout } from './workout'

storiesOf('Workout', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Challenge" usage="Show Challenge Record">
        <Workout rideType={'Type'} numberOfRides={'2'} output={'Calories'} timeToCompleteDays={'2'} challengers={'3'} createdAt={'2021-05-28T02:49:19.498Z'} />
      </UseCase>
    </Story>
  ))
