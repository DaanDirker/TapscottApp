# BlockchainTapscott

## Use case

For this Project we have made an application to donate money to the greater good. In our app you can contribute money to save the ocean. With your donation we get the supplies needed to make the ocean clean. Donations are stored on a secure and trustworthy blockchain. Not only donations but also payments from the company will be saved on the blockchain. On the achievements page in the app a user can see how much and on what we spend the donated money to save the ocean. With this the user can fully see where the money is going so that every penny will go to the good cause. 

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
To get an interaction with the back-end to make payments, a constant value has to be changed containing the *ngrok* url. This can be required after starting It on a port. Open the *Constants.js* file and change the *apiBaseUrl* value to the newly created link. After that you're ready to proceed with running the front-end.


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


## App Manual

You begin on the Start screen where you can see an overview of the total saved donations. Then you can scroll down or click the buoy to make a donation.The app shows you a few different options for the donations process. You can choose ‘1$’ , ‘5$’, ‘10$’ and ‘20$’. There will also be a possibility to donate an amount yourself. The next step is to fill in your name to the donation, but this isn’t required as you can choose to stay anonymous. To process the donation click the donate button. This will  redirect you to the mollie transaction side where you choose your bank and finish your payment. To see where your money is being spent on you can go to the achievements screen. Here you are able to see a diagram with all the expenses of the total saved amount by the company. 

## Screen overview

### Start

* Name of company with goal
* Total money raised by the company
* A clickable buoy to scroll down to donate

### Donation

* A slogan which motivates people to donate money
* Donation buttons (‘1$’ , ‘5$’, ‘10$’ and ‘20$’)
* Textfield for different amount
* Textfield option to fill in your name
* Final donate button
* Options to go to the achievements page

### Mollie Transaction

* After clicking donate you arrive at the Mollie service
* Select your bank
* Finish your payment
* The app will redirect you back

### Achievements

* About us overview
* A diagram with all the expenses
* Transportation, Labor, Fishing nets, Boat rental, Bank
* A list of the last 10 payments made by the company