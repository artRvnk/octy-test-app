# Overview of the app and its purpose

Application created by **Artem Revenko** using React Native. The app **OctyTest** is a test task for [Octy](https://djinni.co/jobs/?company=octyapps-60b83) company. It is designed to display cryptocurrency coins, add and remove coins to favorites, and track their prices at a given time.

# Technical description

## App architecture and design choices

The FSD architecture was used to create the application. Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

There are currently six layers (from top to bottom):

```bash
1. app — everything that makes the app run — routing, entrypoints, global styles, providers
2. screens — full pages or large parts of a page in nested routing
3. widgets — large self-contained chunks of functionality or UI, usually delivering an entire use case
4. features — reused implementations of entire product features, i.e. actions that bring business value to the user
5. entities — business entities that the project works with, like user or product
6. shared — reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily
```

The design of the application is made in black, stylistically simple, and intuitive. There are no unnecessary elements, only minimalism and practicality.

## Description of app structure and major components

The application contains a bottom navigation with the main screens.
The first screen contains a header with a name and an alert button. The alert function is to clear the local coins (checking the offline mod) or cancel the action.
The second screen also contains a header with a name and an alert button. The alert function is to clear the favorite coins or cancel the action.

### Home screen

The main part is occupied by a list of cryptocurrency coins. Each element contains an image and the name of the coin. You can add (or remove) a coin to your favorites by clicking on the button with the heart icon on the right side of the item.
Clicking on a currency item takes you to another screen where all the information about the cryptocurrency is displayed.
The bottom menu has two buttons, and clicking on another element of which will navigate user to the favorites screen.

### Single currency screen

The new screen displays the name, full name, symbol, and an enlarged image of the currency.
Information on the value of the coin in US dollars (by default) has been added, with the option to select another currency, after which the new price will be displayed.
At the bottom of the screen, there are texts with links to the privacy policy and terms of use.

### Favorites screen

The Favorites screen contains a list of selected crypto coins with the option to remove them from the list.

## Offline mode

The offline mode was provided as follows: when crypto coins are initially downloaded, they are saved to the local storage. After that, when there is no Internet connection, the list of coins is downloaded from the local storage instead of the API.

## Additional features or libraries

A large number of contexts were used: internet connection, application language, toast and others related to tsx logic.

The i18n library for multilingualism was used.

The `@react-navigation/bottom-tabs` and `@react-navigation/native-stack` navigation were used.

Custom hooks were used to work with data.

Internet connection info was implemented using animated view.

Icons were implemented using svg files.

Sentry has been added for bug tracking
