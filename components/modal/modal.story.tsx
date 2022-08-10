import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from '../../../storybook/views'
import { WelcomeModal } from './modal'

storiesOf('Modal', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Connect Peloton" usage="Connect Peloton Account.">
        <WelcomeModal
          heading="Connect with account"
          title="Let's get started"
          type="connectPeloton"
          onCancel={() => console.log('Close Modal')}
          onContinue={() => console.log('Continue')}
          onClickLink={() => console.log('Open Link')}
        />
      </UseCase>
      <UseCase text="Connect Paypal" usage="Connect Paypal Account.">
        <WelcomeModal
          heading="30"
          title="Link PayPal account and pay x amount to join challenge"
          type="connectPaypal"
          onCancel={() => console.log('Close Modal')}
          onContinue={() => console.log('Continue')}
          onClickLink={() => console.log('Open Link')}
        />
      </UseCase>
      <UseCase text="Accept" usage="Accept Challenge.">
        <WelcomeModal
          heading="Accept Challenge"
          title="Take your training to new heights. Stay on track with your goals, discover new classes and see yourself improve."
          type="accept"
          onCancel={() => console.log('Cancel Challenge')}
          onContinue={() => console.log('Accept Challenge')}
          onClickLink={() => null}
        />
      </UseCase>
      <UseCase text="Complete" usage="Complete Ride.">
        <WelcomeModal
          heading="You have completed your ride!"
          title="Take your training to new heights. Stay on track with your goals, discover new classes and see yourself improve."
          type="complete"
          onCancel={() => console.log('Cancel Challenge')}
          onContinue={() => console.log('Accept Challenge')}
          onClickLink={() => null}
        />
      </UseCase>
      <UseCase text="Info" usage="Info Popup.">
        <WelcomeModal
          heading="Info title"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          type="info"
          onCancel={() => console.log('Cancel Info')}
          onContinue={() => console.log('Accept Info')}
          onClickLink={() => null}
        />
      </UseCase>
    </Story>
  ))
