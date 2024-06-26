import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('<App />', () => {
  it('should render the App', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /product list/i,
        level: 1
      })
    ).toBeInTheDocument()
  })
})
