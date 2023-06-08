import React from 'react';
import footer from '../settings/footer.json'
import clsx from 'clsx'
import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'

export default function Footer() {

  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          {footer?.photo?.image && (
            <GatsbyLink to="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
              <Image
                src={footer?.photo?.image}
                alt={footer?.photo?.alt}
                className="mr-3 h-6 sm:h-9"
              />
              {footer?.title && ( <p className="my-6 text-gray-500 dark:text-gray-400">{footer?.title}</p>)}
            </GatsbyLink>
          )}
          {footer?.content && ( <p className="my-6 text-gray-500 dark:text-gray-400">{footer?.content}</p>)}
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            {footer.nav && (
              footer.nav.map((button , i) => {
                return <li
                    key={i}>
                  <GatsbyLink className={
                    clsx({
                      'mr-4 hover:underline md:mr-6': (button.type === 'default'),
                      "mr-4 hover:underline md:mr-6 text-white bg-headerTextDefaultBG hover:bg-headerTextHoverBG focus:ring-4 focus:ring-headerTextHoverBG font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-headerTextDefaultBG dark:hover:bg-headerTextHoverBG focus:outline-none dark:focus:ring-headerTextHoverBG": button.type=== 'button'
                    })
                  }
                    to={button.permalink}
                  >
                    {button.name}
                  </GatsbyLink>
                </li>
              })
            )}
          </ul>
          {footer.copyright && (<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {footer.copyright} <a href="/" className="hover:underline">Edge Base</a>. All Rights Reserved.</span>)}
      </div>
    </footer>
  );
}
