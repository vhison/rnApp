import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { ProgressCard } from './progresscard'
import { FlatList } from 'react-native'
import data from '../../config/data'

storiesOf('ProgressCard', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <FlatList
        data={data.progressCardData}
        renderItem={({ item }) => (
          <UseCase text="Challenge Card" usage="Show Progress of Ride Type">
            <ProgressCard
              name={item.name}
              points={item.points}
              data={item.progress}
              bet={[]}
              participants={'0'}
              date={''}
            />
          </UseCase>
        )}
        keyExtractor={(item, index) => 'challenge_' + index}
      />
    </Story>
  ))
