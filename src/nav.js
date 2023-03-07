import navYtp from '@/pages/essentials-for-yoothemepro/nav.json'
import navForms from '@/pages/essentials-for-yoothemepro/forms/nav.json'
import navSources from '@/pages/essentials-for-yoothemepro/sources/nav.json'
import navAccess from '@/pages/essentials-for-yoothemepro/access/nav.json'
import navDynamic from '@/pages/essentials-for-yoothemepro/dynamic/nav.json'
import navLayout from '@/pages/essentials-for-yoothemepro/layouts/nav.json'
import navIcons from '@/pages/essentials-for-yoothemepro/icons/nav.json'
import navElements from '@/pages/essentials-for-yoothemepro/elements/nav.json'

const navs = {
    '/essentials-for-yoothemepro': navYtp,
    '/essentials-for-yoothemepro/elements': navElements,
    '/essentials-for-yoothemepro/icons': navIcons,
    '/essentials-for-yoothemepro/layouts': navLayout,
    '/essentials-for-yoothemepro/access': navAccess,
    '/essentials-for-yoothemepro/dynamic': navDynamic,
    '/essentials-for-yoothemepro/sources': navSources,
    '/essentials-for-yoothemepro/forms': navForms,
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
