import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders the learning journey heading', () => {
  const container = document.createElement('div');
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(/my react learning journey/i);
});
