# React Button Component Library

This is a simple React component library that provides a reusable Button component for rendering customizable buttons.

## Installation

To install the component library, run the following command:

```
npm install my-react-button-library
```

## Usage

To use the Button component in your React project, you need to first import it into your file:

```js
import { Button } from 'my-react-button-library';
```

Then, you can use the Button component just like any other React component, passing in the appropriate props to customize its appearance and behavior. For example:

```js
<Button label="Click me!" onClick={() => alert('Button clicked!')} />
```

This will render a button with the label "Click me!" and an onClick event handler that displays an alert when clicked.

## Props

The Button component accepts the following props:

- `label`: A string that specifies the text label for the button (required).
- `onClick`: A function that specifies the event handler for when the button is clicked.
- `disabled`: A boolean that specifies whether the button should be disabled.
- `className`: A string that specifies the CSS class name for the button.

## Contributing

We welcome contributions to this component library! To contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your changes and test them.
4. Create a pull request with a clear description of your changes.

We appreciate all contributions, including bug reports, feature requests, and code improvements. Thank you for helping to make this component library better!