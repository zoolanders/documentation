import navYtp from './essentials-for-yoothemepro/nav.json'
import navForms from './essentials-for-yoothemepro/forms/nav.json'
import navAccess from './essentials-for-yoothemepro/access/nav.json'

const navs = {
    '/essentials-for-yoothemepro': navYtp,
    '/essentials-for-yoothemepro/access': navAccess,
    '/essentials-for-yoothemepro/forms': navForms,
}

export function getNav(forPath) {
    const path = findNavMatch(forPath)
    const nav = navs[path]?.sections || []

    for (const section of nav) {
        for (const link of section.links) {
            link.href = link.href.replace('./', `${path}/`).replace(/\/$/, '')
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
