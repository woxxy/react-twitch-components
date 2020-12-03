# React Twitch Components

React Twitch Components is a library of React components built with the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/), meant to be used as an overlay for your streams.

The components automatically load the information from your Twitch account and keep up to date. They are easy to style, extend, and automate with.

I am [@WoxxyTheFool on Twitch](https://twitch.tv/woxxythefool) and I stream coding, including coding this project.

# Quick Example

```tsx
const App: FC = () => {
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

This part will be included after the library is published.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
