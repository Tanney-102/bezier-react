import React from 'react'

function SvgOrder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6h20V4H2v2zm3 7h14v-2H5v2zm11 7H8v-2h8v2z"
      />
    </svg>
  )
}

export default SvgOrder