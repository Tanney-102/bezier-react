import React from 'react'

function SvgCancelSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.657 7.757l-1.414-1.414L12 10.586 7.758 6.343 6.344 7.757 10.586 12l-4.242 4.242 1.414 1.414L12 13.414l4.243 4.242 1.414-1.414L13.414 12l4.243-4.243z"
      />
    </svg>
  )
}

export default SvgCancelSmall
