import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { ProgressBar } from './progressbar'
import { FlatList } from 'react-native'
import data from '../../config/data'

storiesOf('ProgressBar', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <FlatList
        data={data.progressData}
        renderItem={({ item }) => (
          <UseCase text="Progress Bar" usage={'Upto ' + item.average_value + '% Progress'}>
            <ProgressBar title={item.display_name} range={item.average_value} total={item.max_value} />
          </UseCase>
        )}
        keyExtractor={(item, index) => 'progress_' + index}
      />
    </Story>
  ))
