import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'zarkan',
      slug: 'zarkan',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Amsterda',
      slug: 'amsterda',
      location: {
        latitude: 205,
        longitude: -80
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/zarkan/i)).toBeInTheDocument()
    expect(screen.getByTitle(/amsterda/i)).toBeInTheDocument()
  })
})
