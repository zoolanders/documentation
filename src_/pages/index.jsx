export default function Home() {
  return (
    <div className="overflow-hidden bg-primary px-8 dark:bg-slate-900 min-h-screen -mt-16">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Documentation for ZOOlanders Essentials
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-900">
            Start by selecting the relevant product, delve into the documentation and learn how to use Essentials for ZOO or YOOtheme Pro effectively.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/essentials-for-zoo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm"
              >
                Essentials for ZOO
              </a>
              <a
                href="/essentials-for-yootheme-pro"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm"
              >
                Essentials for YTP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      layout: 'Page',
    },
  }
}
