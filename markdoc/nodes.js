import { Fence } from '@/components/Fence'
import { nodes as defaultNodes, Tag } from '@markdoc/markdoc'
import isAbsoluteUrl from 'is-absolute-url'
// import { link } from '@markdoc/next.js/tags'

const nodes = {
  document: {
    render: undefined,
  },
  link: {
    ...defaultNodes.link,
    transform(node, config) {
      const children = node.transformChildren(config);

      if (isAbsoluteUrl(node.attributes.href)) {
        node.attributes.target = '_blank'
      }

      return new Tag(
        `a`,
        {...node.attributes},
        children
      );
    }
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: 'col',
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
}

export default nodes
