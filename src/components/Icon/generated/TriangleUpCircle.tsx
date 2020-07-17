import React from 'react'

function SvgTriangleUpCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm-.279 4.277a.3.3 0 01.461 0l4.36 5.23a.302.302 0 01-.23.494h-8.72a.3.3 0 01-.23-.493z"
      />
    </svg>
  )
}

export default SvgTriangleUpCircle