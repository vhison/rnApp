import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { Icons } from './icons'

storiesOf('Icons', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Logo Icon" usage="Shows App Logo">
        <Icons name="" type="logo" header={false} />
      </UseCase>
      <UseCase text="Menu Icon" usage="Open the Menu Items">
        <Icons name="" type="menu" header={false} />
      </UseCase>
      <UseCase text="Currency Icon" usage="Currency Symbol">
        <Icons name="" type="currency" header={false} />
      </UseCase>
      <UseCase text="Selection Icon" usage="Choice Selection">
        <Icons name="" type="select" header={false} />
      </UseCase>
      <UseCase text="Check Icon" usage="Check Choice">
        <Icons name="" type="tick" header={false} />
      </UseCase>
      <UseCase text="Paypal Icon" usage="Paypal Logo">
        <Icons name="" type="paypal" header={false} />
      </UseCase>
      <UseCase text="Complete Icon" usage="Indicate Completion">
        <Icons name="" type="complete" header={false} />
      </UseCase>
      <UseCase text="Search Icon" usage="Search Items">
        <Icons name="" type="search" header={false} />
      </UseCase>
      <UseCase text="Dropdown Icon" usage="Show Choices">
        <Icons name="" type="dropdown" header={false} />
      </UseCase>
      <UseCase text="Info Large Icon" usage="Information Label">
        <Icons name="" type="infolarge" header={false} />
      </UseCase>
      <UseCase text="Info Small Icon" usage="Expand Information">
        <Icons name="" type="infosmall" header={false} />
      </UseCase>
      <UseCase text="Add Icon" usage="Add Feature">
        <Icons name="" type="add" header={false} />
      </UseCase>
      <UseCase text="Logout Icon" usage="Sign Out">
        <Icons name="" type="logout" header={false} />
      </UseCase>
      <UseCase text="Invite Icon" usage="Invite User">
        <Icons name="" type="invite" header={false} />
      </UseCase>
      <UseCase text="Favourite Icon" usage="Favourite Items">
        <Icons name="" type="favourite" header={false} />
      </UseCase>
      <UseCase text="Activity Icon" usage="Activity Items">
        <Icons name="" type="activity" header={false} />
      </UseCase>
      <UseCase text="Setting Icon" usage="Set Preferences">
        <Icons name="" type="setting" header={false} />
      </UseCase>
      <UseCase text="Right Arrow Icon" usage="Move Forward">
        <Icons name="" type="arrowright" header={false} />
      </UseCase>
      <UseCase text="Back Icon" usage="Navigate to previous screen">
        <Icons name="Back" type="back" header={true} />
      </UseCase>
    </Story>
  ))
