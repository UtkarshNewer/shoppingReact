import React from 'react'
// import ProductInfo from './ProductInfo'
import { render, cleanup } from '@testing-library/react'
import ErrorModalContainer from './ErrorModal'

afterEach(cleanup)

const defaultProps = {
  onClick: jest.fn(),
  text: 'Close',
}

test('button renders with correct text', () => {
  const { queryByText } = render(<ErrorModalContainer {...defaultProps} />)
  expect(queryByText('Close')).toBeTruthy()
})