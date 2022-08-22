# appFront

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
## Run Bundler
```
yarn start
```
## Run iOS
```
yarn ios
```
## Run Android
```
yarn android
```