import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import clsx from 'clsx'
import Router from 'next/router'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import { useScroller } from '@/state'

const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
}

function Hit({ hit, children }) {
  return <Link href={hit.url}>{children}</Link>
}

function SearchIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  )
}

export function Search(props) {
  let [isOpen, setIsOpen] = useState(false)
  let [modifierKey, setModifierKey] = useState()

  const {isScrolled} = useScroller()

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    )
  }, [])

  return (
    <>
      <button
        type="button"
        className={clsx(
          'group flex h-5 w-5 items-center',
          props.full
            ? 'justify-start sm:mx-auto lg:mx-0 h-auto w-60 sm:w-80 flex-none rounded-lg py-2.5 pl-4 pr-3.5 text-sm ring-1 ring-[#febfca] hover:ring-white dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500'
            : ''
        )}
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-[#febfca] group-hover:fill-white dark:fill-slate-400 dark:group-hover:fill-slate-300" />
        {props.full && (
          <span className="ml-2 text-[#febfca] dark:text-slate-400">
            Quick Search...
          </span>
        )}
        {props.full && modifierKey && (
          <kbd className="ml-auto font-medium text-[#febfca] dark:text-slate-500 block">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl)
              },
            }}
          />,
          document.body
        )}
    </>
  )
}
