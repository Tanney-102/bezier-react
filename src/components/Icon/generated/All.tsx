import React from 'react'

function SvgAll(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.5 17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H18V7.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h3zm-5 0a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V7.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h3zm-5 0a.5.5 0 00.5-.5V9a2 2 0 00-2-2H6a2 2 0 00-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V14h2v2.5a.5.5 0 00.5.5h1zM4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm2.5 4h1a.5.5 0 01.5.5V12H6V9.5a.5.5 0 01.5-.5z"
      />
    </svg>
  )
}

export default SvgAll
