import { Search } from '@/components/Search'
import Image from 'next/future/image'

export function DocHero({title, description, image}) {
  // workaround to avoid wrap ytp word
  description = description.replace('YOOtheme Pro', '<span class="whitespace-nowrap">YOOtheme Pro</span>')

  return (
    <div className="overflow-hidden bg-primary dark:bg-slate-900">

      <div className="relative py-8 px-4">

        <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                {title && <span className="block text-base font-display text-slate-900 dark:text-slate-500 sm:text-lg lg:text-base xl:text-lg">
                  {title}
                </span>}
                {description && <span className="mt-1 block text-4xl font-bold tracking-tight text-white">
                  <span className="block text-white" dangerouslySetInnerHTML={{ __html: description }}></span>
                </span>}
              </h1>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Search full/>
              </div>
            </div>
            {image && <div className="relative mt-12 hidden lg:visible sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

              <div className="relative mx-auto w-full lg:max-w-md">
                  <Image
                    className="w-full"
                    src={image}
                    width="500"
                    height="500"
                    alt={title}
                    priority
                  />
              </div>

            </div>}
          </div>
        </main>
      </div>

    </div>
  )
}
