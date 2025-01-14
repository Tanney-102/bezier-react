/* External dependencies */
import { Fragment, useMemo } from 'react'

/* Internal dependencies */
import { ariaAttr } from 'Utils/domUtils'
import type { FormComponentProps } from 'Components/Forms/Form.types'
import useFormControlContext from './useFormControlContext'

function useFormFieldProps<Props extends FormComponentProps>(props?: Props) {
  const contextValue = useFormControlContext()

  const formFieldProps = useMemo(() => {
    const mergedProps = contextValue?.getFieldProps(props) ?? {
      ...props,
      Wrapper: Fragment,
    }

    const {
      disabled = false,
      readOnly = false,
      required = false,
      hasError = false,
      ...rest
    } = mergedProps

    return {
      ...rest,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
      disabled,
      hasError,
      required,
      readOnly,
    }
  }, [
    props,
    contextValue,
  ])

  return formFieldProps as typeof formFieldProps & Props
}

export default useFormFieldProps
