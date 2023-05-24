import navYtp from '@/pages/yoothemepro/nav.json'
import navZoo from '@/pages/essentials-for-zoo/nav.json'
import navZooFilter from '@/pages/essentials-for-zoo/filter/nav.json'
import navEssYtp from '@/pages/essentials-for-yootheme-pro/nav.json'
import navForms from '@/pages/essentials-for-yootheme-pro/addons/forms/nav.json'
import navSources from '@/pages/essentials-for-yootheme-pro/addons/sources/nav.json'
import navAccess from '@/pages/essentials-for-yootheme-pro/addons/access/nav.json'
import navDynamic from '@/pages/essentials-for-yootheme-pro/addons/dynamic/nav.json'
import navLayout from '@/pages/essentials-for-yootheme-pro/addons/layouts/nav.json'
import navIcons from '@/pages/essentials-for-yootheme-pro/addons/icons/nav.json'
import navElements from '@/pages/essentials-for-yootheme-pro/addons/elements/nav.json'

const navs = {
    '/yoothemepro': navYtp,
    '/essentials-for-zoo': navZoo,
    '/essentials-for-zoo/filter': navZooFilter,
    '/essentials-for-yootheme-pro': navEssYtp,
    '/essentials-for-yootheme-pro/addons/elements': navElements,
    '/essentials-for-yootheme-pro/addons/layouts': navLayout,
    '/essentials-for-yootheme-pro/addons/dynamic': navDynamic,
    '/essentials-for-yootheme-pro/addons/icons': navIcons,
    '/essentials-for-yootheme-pro/addons/forms': navForms,
    '/essentials-for-yootheme-pro/addons/sources': navSources,
    '/essentials-for-yootheme-pro/addons/access': navAccess,
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
