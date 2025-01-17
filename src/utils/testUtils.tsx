/* External dependencies */
import React, { ReactElement } from 'react'
import { render as baseRender, RenderOptions } from '@testing-library/react'

/* Internal dependencies */
import { FoundationProvider, LightFoundation } from 'Foundation'
import { ChildrenProps } from 'Types/ComponentProps'

function TestProviders({ children }: ChildrenProps) {
  return (
    <FoundationProvider foundation={LightFoundation}>
      { children }
    </FoundationProvider>
  )
}

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return baseRender(ui, { wrapper: TestProviders, ...options })
}
