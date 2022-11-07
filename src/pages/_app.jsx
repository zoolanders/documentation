import React from 'react'
import Head from 'next/head'
import { DocLayout } from '@/components/DocLayout'
import { PageLayout } from '@/components/PageLayout'

import 'focus-visible'
import '@/styles/tailwind.css'

// nav
import navYtp from './essentials-for-yoothemepro/navigation.json'
import navForms from './essentials-for-yoothemepro/forms/navigation.json'

const navigations = {
  '/essentials-for-yoothemepro': navYtp,
  '/essentials-for-yoothemepro/forms': navForms,
}

export default function App({ Component, pageProps }) {
  const {frontmatter = {}} = pageProps.markdoc || {};
  const pageTitle = frontmatter.pageTitle || 'ZOOlanders Documentation' + (frontmatter.title ? `- ${frontmatter.title}` : '')
  const pageDescription = frontmatter.description

  let Layout = DocLayout

  if (pageProps.statusCode === 404) {
    Layout = PageLayout
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {pageDescription && <meta name="description" content={pageDescription} />}
        <link rel="shortcut icon" href="/zoolanders-favicon.png"></link>
        <link rel="apple-touch-icon" href="/zoolanders-touch-icon.png"></link>
      </Head>
      <Layout {...pageProps} navigations={navigations}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
