import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { Button } from './button'

storiesOf('Button', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary" usage="Primary button.">
        <Button name="Primary Large" type="primary" isLoading={false} onPress={() => console.log('Primary')} />
      </UseCase>
      <UseCase text="Primary" usage="Primary button with Loading Indicator.">
        <Button name="Primary Loading" type="primary" isLoading={true} onPress={() => console.log('Primary')} />
      </UseCase>
      <UseCase text="Primary" usage="Primary Small button.">
        <Button
          name="Primary Small"
          type="primarysmall"
          isLoading={false}
          onPress={() => console.log('Primary Small')}
        />
      </UseCase>
      <UseCase text="Primary" usage="Primary Thin button.">
        <Button
          name="Primary Thin"
          type="primarythin"
          isLoading={false}
          onPress={() => console.log('Primary Thin')}
        />
      </UseCase>
      <UseCase text="Secondary" usage="Secondary button.">
        <Button name="Secondary" type="secondary" isLoading={false} onPress={() => console.log('Secondary')} />
      </UseCase>
    </Story>
  ))
