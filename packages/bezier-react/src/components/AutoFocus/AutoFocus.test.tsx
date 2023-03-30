/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import { AutoFocus } from './AutoFocus'
import { type AutoFocusProps } from './AutoFocus.types'

describe('AutoFocus', () => {
  const renderComponent = ({ children }: AutoFocusProps) => render(
    <AutoFocus>{ children }</AutoFocus>,
  )

  it('should focus on the child element - HTMLDivElement', () => {
    const { getByText } = renderComponent({
      children: <div tabIndex={-1}>Close</div>,
    })
    const rendered = getByText('Close')
    expect(rendered).toHaveFocus()
  })

  it('should focus on the child element - HTMLButtonElement', () => {
    const { getByRole } = renderComponent({
      children: <button type="button">Close</button>,
    })
    const rendered = getByRole('button')
    expect(rendered).toHaveFocus()
  })

  it('should focus on the child element - HTMLInputElement', () => {
    const { getByRole } = renderComponent({
      children: <input type="text" />,
    })
    const rendered = getByRole('textbox')
    expect(rendered).toHaveFocus()
  })
})
