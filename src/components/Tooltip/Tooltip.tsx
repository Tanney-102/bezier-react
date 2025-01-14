/* External dependencies */
import React, { useState, useCallback, useMemo, useRef, forwardRef, Ref, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { isEmpty, isString, isArray } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useMergeRefs from 'Hooks/useMergeRefs'
import useEventHandler from 'Hooks/useEventHandler'
import { window, getRootElement } from 'Utils/domUtils'
import { Text } from 'Components/Text'
import TooltipProps, { TooltipPosition } from './Tooltip.types'
import { getReplacement, getTooltipStyle } from './utils'
import { Container, ContentWrapper, Content, EllipsisableContent } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'bezier-react-tooltip'

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    className,
    contentClassName,
    contentInterpolation,
    content = null,
    placement = TooltipPosition.BottomCenter,
    disabled = false,
    offset = 4,
    keepInContainer = false,
    allowHover = false,
    delayShow = 0,
    delayHide = 0,
    children,
    ...otherProps
  }: TooltipProps,
  forwardedRef: Ref<any>,
) {
  const [show, setShow] = useState(false)
  const [replacement, setReplacement] = useState(placement)
  const [replaced, setReplaced] = useState(false)

  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const tooltipContainerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<Window['setTimeout']>>()
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    if (disabled) {
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      setShow(true)
    }, delayShow)
  }, [
    delayShow,
    disabled,
  ])

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      setShow(false)
    }, delayHide)
  }, [
    delayHide,
    disabled,
  ])

  const contentWrapperStyle = useMemo(() => {
    if (show && tooltipContainerRef.current) {
      return getTooltipStyle({
        tooltipContainer: tooltipContainerRef.current,
        placement: replacement,
        offset,
        allowHover,
      })
    }

    return {}
  }, [
    show,
    replacement,
    offset,
    allowHover,
  ])

  const getNewLineComponent = useCallback((strContent: string) => (
    strContent.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={str} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <>
          <br />
          <Text key={str} typo={Typography.Size14}>
            { str }
          </Text>
        </>
      )
    })
  ), [])

  const handleClickTooltip = useCallback((event: HTMLElementEventMap['click']) => {
    event.stopPropagation()
  }, [])

  const ContentComponent = useMemo(() => {
    if (!show) {
      return null
    }

    if (isArray(content)) {
      return content.map(item => {
        if (isString(item)) {
          return getNewLineComponent(item)
        }

        return item
      })
    }

    if (isString(content)) {
      return getNewLineComponent(content)
    }

    return content
  }, [
    show,
    content,
    getNewLineComponent,
  ])

  const TooltipComponent = useMemo(() => (
    <ContentWrapper
      ref={tooltipWrapperRef}
      disabled={disabled || isEmpty(content)}
      isHidden={keepInContainer && !replaced}
      style={contentWrapperStyle}
    >
      <Content
        as={as}
        data-testid={testId}
        className={contentClassName}
        interpolation={contentInterpolation}
        ref={mergedRef}
      >
        <EllipsisableContent>
          { ContentComponent }
        </EllipsisableContent>
      </Content>
    </ContentWrapper>
  ), [
    ContentComponent,
    as,
    content,
    contentClassName,
    contentInterpolation,
    contentWrapperStyle,
    disabled,
    keepInContainer,
    replaced,
    mergedRef,
    testId,
  ])

  useEventHandler(tooltipRef.current, 'click', handleClickTooltip, show)

  useEffect(() => {
    if (disabled) {
      setShow(false)
    }
  }, [disabled])

  useEffect(() => {
    if (show) {
      if (!tooltipRef.current) { return }
      const newPlacement = getReplacement({
        tooltip: tooltipRef.current,
        keepInContainer,
        placement,
      })
      setReplacement(newPlacement)
      setReplaced(true)
      return
    }
    setReplacement(placement)
    setReplaced(false)
  }, [
    show,
    keepInContainer,
    placement,
  ])

  if (!children) {
    return null
  }

  return (
    <Container
      ref={tooltipContainerRef}
      data-testid={testId}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      { children }
      { show && ReactDOM.createPortal(TooltipComponent, getRootElement()) }
    </Container>
  )
}

export default forwardRef(Tooltip)
