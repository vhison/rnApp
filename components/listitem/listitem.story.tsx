import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { ListItem } from './listitem'

storiesOf('ListItem', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Item Selected" usage="List Of Ride Details">
        <ListItem
          _id={'1'}
          rank={'1'}
          title={'Title'}
          duration={'00:32:10'}
          label={'Beginner'}
          startDate={'Feb 24'}
          endDate={'Mar 22'}
          numberOFWeek={'4'}
          selected={true}
          createdAt={'2021-05-04T07:27:16.409Z'}
          onSelect={() => console.log('2')}
        />
      </UseCase>
      <UseCase text="Item Selected" usage="List Of Ride Details">
        <ListItem
          _id={'2'}
          rank={'2'}
          title={'Title'}
          duration={'00:52:10'}
          label={'Beginner'}
          startDate={'Feb 24'}
          endDate={'Mar 22'}
          numberOFWeek={'4'}
          selected={true}
          createdAt={'2021-05-04T07:27:16.409Z'}
          onSelect={() => console.log('2')}
        />
      </UseCase>
      <UseCase text="Item Unselected" usage="List Of Ride Details">
        <ListItem
          _id={'1'}
          rank={'1'}
          title={'Title'}
          duration={'00:32:10'}
          label={'Beginner'}
          startDate={'Feb 24'}
          endDate={'Mar 22'}
          numberOFWeek={'4'}
          selected={false}
          createdAt={'2021-05-04T07:27:16.409Z'}
          onSelect={() => console.log('2')}
        />
      </UseCase>
      <UseCase text="Item Unselected" usage="List Of Ride Details">
        <ListItem
          _id={'2'}
          rank={'2'}
          title={'Title'}
          duration={'00:62:10'}
          label={'Beginner'}
          startDate={'Feb 24'}
          endDate={'Mar 22'}
          numberOFWeek={'4'}
          selected={false}
          createdAt={'2021-05-04T07:27:16.409Z'}
          onSelect={() => console.log('2')}
        />
      </UseCase>
    </Story>
  ))
