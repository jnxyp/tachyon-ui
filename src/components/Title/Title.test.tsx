import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Title } from './Title'

describe('Title test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<Title title='Testing' />)
  })

  it('should render title', () => {
    render(<Title title='Testing' />)
    screen.getByText('Testing')
  })
})
