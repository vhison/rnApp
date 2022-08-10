import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { CheckBox } from './checkbox'

storiesOf('CheckBox', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary Checkbox" usage="Active Checkbox.">
        <CheckBox
          name="Selected"
          type="primary"
          info={true}
          onPress={() => console.log('selected')}
          getInfo={() => console.log('Get Info')}
        />
      </UseCase>
      <UseCase text="Secondary Checkbox" usage="Inactive Checkbox.">
        <CheckBox
          name="Unselected"
          type="secondary"
          info={true}
          onPress={() => console.log('unselected')}
          getInfo={() => console.log('Get Info')}
        />
      </UseCase>
      <UseCase text="Mark Checkbox" usage="Mark Checkbox.">
        <CheckBox
          name="Marked"
          type="tick"
          info={false}
          onPress={() => console.log('marked')}
          getInfo={() => console.log('Get Info')}
        />
      </UseCase>
    </Story>
  ))
