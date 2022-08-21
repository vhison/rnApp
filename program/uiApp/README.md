# uiApp

## installation

### ensure correct node version is installed

```
cat .nvmrc | nvm use
```

### install global dependencies

Install Android Studio:
  https://developer.android.com/studio/
Install Xcode:
  https://apps.apple.com/us/app/xcode/id497799835?mt=12
Install xcode tools:
```
sudo xcode-select --install
```
Install cocapods:
  https://guides.cocoapods.org/using/getting-started.html
```
sudo gem install cocoapods
```
Install react-native dependencies (React Native iOS and Android):
  https://reactnative.dev/docs/environment-setup

Clone Repo:
```
git clone git@github.com:vhison/rnApp.git
```

```
npm install -g yarn prettier eslint expo-cli

```

### install local dependencies

```
yarn pod-install
```

Launch ios:
```
yarn ios
```
Launch android:
```
yarn android
```

## Run instructions for Android
```
Have an Android emulator running (quickest way to get started), or a device connected.
```
```
cd "program/uiApp" && npx react-native run-android
```
## Run instructions for iOS
```
cd "program/uiApp" && npx react-native run-ios
```
- OR
```
Open uiApp/ios/uiApp.xcworkspace in Xcode or run "xed -b ios"
```
```
Hit the Run button
```


## Run instructions for macOS

```
See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
```
### launch metro locally

```
yarn start
```

Click Android Emulator from left navigation

```
a
```

Click iOS Simulator from left navigation

```
i
```
