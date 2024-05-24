const React = require('react');
const { render } = require('@testing-library/react');
const App = require('./App');

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
