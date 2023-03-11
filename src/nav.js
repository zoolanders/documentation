import navYtp from '@/pages/essentials-for-yoothemepro/nav.json'
import navForms from '@/pages/essentials-for-yoothemepro/addon/forms/nav.json'
import navSources from '@/pages/essentials-for-yoothemepro/addon/sources/nav.json'
import navAccess from '@/pages/essentials-for-yoothemepro/addon/access/nav.json'
import navDynamic from '@/pages/essentials-for-yoothemepro/addon/dynamic/nav.json'
import navLayout from '@/pages/essentials-for-yoothemepro/addon/layouts/nav.json'
import navIcons from '@/pages/essentials-for-yoothemepro/addon/icons/nav.json'
import navElements from '@/pages/essentials-for-yoothemepro/addon/elements/nav.json'

const navs = {
    '/essentials-for-yoothemepro': navYtp,
    '/essentials-for-yoothemepro/addon/elements': navElements,
    '/essentials-for-yoothemepro/addon/layouts': navLayout,
    '/essentials-for-yoothemepro/addon/dynamic': navDynamic,
    '/essentials-for-yoothemepro/addon/icons': navIcons,
    '/essentials-for-yoothemepro/addon/forms': navForms,
    '/essentials-for-yoothemepro/addon/sources': navSources,
    '/essentials-for-yoothemepro/addon/access': navAccess,
}

export function getNav(forPath) {
    const path = findNavMatch(forPath)
    const nav = navs[path]?.sections || []

    const resolveRoute = item => item.href = item.href.replace('./', `${path}/`).replace(/\/$/, '')

    for (const section of nav) {
        for (const link of (section?.links || [])) {
            resolveRoute(link)

            for (const sublink of (link?.links || [])) {
                resolveRoute(sublink)

                for (const subsublink of (sublink?.links || [])) {
                    resolveRoute(subsublink)
                }
            }
        }
    }

    return nav
}

export function getSubnav(forPath) {
    const paths = Object.keys(navs).reverse()
    const subnavs = {}

    for (const path of paths) {
        if (path.startsWith(forPath) && forPath !== path) {
            subnavs[path] = navs[path]
        }
    }

    return subnavs
}

function findNavMatch(forPath) {
    const paths = Object.keys(navs).reverse()

    for (const path of paths) {
        if (forPath.startsWith(path)) {
            return path
        }
    }

    return ''
}
