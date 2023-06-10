import React from 'react'
import Link from '../../resolvers/Link'
import clsx from 'clsx'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle = 'group inline-block font-bold text-dark-500 dark:text-white'
  switch (button?.variant) {
    case 'button':
      buttonStyle = `${buttonStyle} text-white bg-headerTextDefaultBG hover:bg-headerTextHoverBG focus:ring-4 focus:ring-headerTextHoverBG font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-headerTextDefaultBG dark:hover:bg-headerTextHoverBG focus:outline-none dark:focus:ring-headerTextHoverBG`
      break
    case 'outlined':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white py-2 px-6 text-center dark:hover:bg-white hover:bg-dark-500 hover:text-white dark:hover:text-black transition-colors`
      break
    default:
      buttonStyle = `${buttonStyle} link dark:link-dark`
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={clsx(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={clsx(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
