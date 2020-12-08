# React Twitch Components

React Twitch Components is a library of React components built with the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/), meant to be used as an overlay for your streams.

The components automatically load the information from your Twitch account and keep up to date. They are easy to style, extend, and automate with.

I am [@WoxxyTheFool on Twitch](https://twitch.tv/woxxythefool) and I stream coding, including coding this project.

# Quick Example

```tsx
const App = () => {
  return (
    <TwitchProvider>
      <UserDisplayName /> has <FollowerCount /> followers.
    </TwitchProvider>
  );
};

export default App;
```

# Goals

- Create the building blocks to display static and dynamic Twitch information in a stream
- Provide a set of hooks and providers that simplify the fetching and updating of information
- Allow for intricate automation in order to bring new experiences to the viewers

## Usage

- Prepare your React env (16.8+), in example with Create React App
- `npm install react-twitch-components`
- Wrap your components with `<TwitchProvider>`
- Use the components from this library within the provider.

To see the available components, look into `src/components` or look into the styleguide.

## Running the styleguide

`npm run storybook` and then go to localhost:6006
