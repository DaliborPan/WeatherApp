# Weather app

Purpose of this app is to show **some** weather data for city of users choice.
Weather data can be fetched from this [API](https://openweathermap.org/api).

## Setup

You need to have yarn installed. Then install existing dependencies:

```bash
yarn install
```

Start dev server:

```bash
yarn start
```

To install new dependency:

```bash
yarn add <new-dependency>
```

## TODO

- Implement logic in *CitySelect* component. User should be able to choose from few (5 - 10)
predefined cities (implemented as select for example, you can use
[react select](https://react-select.com/home)).
With the mentioned API it's better to use
the city ID instead of city name, you can read more [here](https://openweathermap.org/current)
in ***By city ID*** section.

- There should be a button, which when clicked calls API with selected city.
(for requests you can use
[axios](https://www.npmjs.com/package/axios), [ky](https://www.npmjs.com/package/ky),...).

- **Some** of the fetched data should be displayed. It's up to you which data and how you display
it (nothing fancy needed).

- User can make max 3 API calls. If he tries to make more, some kind of error message should be
displayed instead of making an API call.

- Create atleast one **type** or **interface**. For example for response from the API.

### Hints

- If using select for cities, use city names as labels and IDs as values
- It's up to you where you put the weather data fetching logic, just add necessary *props* to
components so you can display it in *WeatherDisplay*.
- Number of api calls made can be refreshed on page refresh. So you don't have to use cookies
or local storage. Just a simple hook.
- Use [hooks](https://reactjs.org/docs/hooks-intro.html) where suitable

### Bonus

- It's a good practice to have API keys stored in env variables. You can create env file
and load your api key dynamically in the code. You can read more about it
[here](https://create-react-app.dev/docs/adding-custom-environment-variables/).
