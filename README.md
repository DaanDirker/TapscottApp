# BlockchainTapscott

This is the frontend app side running on React Native with Redux. 

## Requirements
* Node, working on v12.11.0 
* Android studio phone Emulator or device
* Python2
* JDK version 8 or higher
* Backend running (see GIT Readme for requirements)

## Installation
We use NPM to install all of the modules and packages needed to run the project. Navigate to the front-end folder and install all required npm packages:
```bash
npm i
```

## Running the frontend

To run the app you first need to startup an emulator device from Android studios or connect a physical device to your pc. Make sure to allow the installation on your device when running. Using *react-native* we can run the project on either an Android or iOS device.

Android
```bash
react-native run-android
```

iOS:
```bash
react-native run-iOS
```
If configured correctly this will install the application on the selected device and start a nodejs prompt of metro bundler.


### App Manual

## Donation flow
* Click on the buoy or scroll down
* Select one of the amount options or give a specific amount
* Fill in your name 
* Click on donate
* The app will redirect you to the Mollie transfer screen
* Select paid and continue
* The transaction will be made and logged