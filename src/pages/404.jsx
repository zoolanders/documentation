import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-slate-900 dark:text-slate-500">
                  Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 font-display text-base text-slate-900 dark:text-white sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/" className="text-primary">
                  Go back home <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      statusCode: 404,
    },
  }
}
