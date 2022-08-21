import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Image } from 'react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { Header } from './header'

const menuIcon = <Image style={{ height: 20, width: 20 }} source={require('../../assets/MenuIcon.png')} />
const shareIcon = <Image style={{ height: 20, width: 22.5 }} source={require('../../assets/shareIcon.png')} />
const logoIcon = <Image style={{ height: 40, width: 100 }} source={require('../../assets/HeaderLogo.png')} resizeMode='contain'/>

storiesOf('Header', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Header Left" usage="Screen Header with Left Content.">
        <Header leftContent={menuIcon} />
      </UseCase>
      <UseCase text="Header Right" usage="Screen Header with Right Content.">
        <Header rightContent={menuIcon} />
      </UseCase>
      <UseCase text="Header Center" usage="Screen Header with Center Content.">
        <Header centerContent={logoIcon} />
      </UseCase>
      <UseCase text="Complete Header" usage="Screen Header with Left, Center and Right Content.">
        <Header leftContent={menuIcon} centerContent={logoIcon} rightContent={menuIcon} />
      </UseCase>
    </Story>
  ))
