import React from 'react'
import Head from 'next/head'
import { NavContext } from '@/context'
import { useRouter } from 'next/router'
import { DocLayout } from '@/components/DocLayout'
import { PageLayout } from '@/components/PageLayout'
import { getNav, getSubnav } from '@/nav'

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const { frontmatter = {} } = pageProps.markdoc || {}
    const pageTitle =
        frontmatter.pageTitle ||
        'ZOOlanders Documentation' +
            (frontmatter.title ? `- ${frontmatter.title}` : '')
    const pageDescription = frontmatter.description

    let Layout = DocLayout

    if (pageProps.statusCode === 404) {
        Layout = PageLayout
    }

    const nav = getNav(router.pathname)
    const subnav = getSubnav(router.pathname.split('/').slice(0, 2).join('/'))

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                {pageDescription && (
                    <meta name="description" content={pageDescription} />
                )}
                <link rel="shortcut icon" href="/zoolanders-favicon.png"></link>
                <link
                    rel="apple-touch-icon"
                    href="/zoolanders-touch-icon.png"
                ></link>
            </Head>
            <NavContext.Provider value={nav}>
                <Layout {...pageProps} navigation={nav} subnav={subnav}>
                    <Component {...pageProps} />
                </Layout>
            </NavContext.Provider>
        </>
    )
}
