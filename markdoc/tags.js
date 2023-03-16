import { Image } from '@/components/Image'
import { Callout } from '@/components/Callout'
import { Details } from '@/components/Details'
import { Download } from '@/components/Download'
import { ElementIcon } from '@/components/ElementIcon'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  image: {
    attributes: {
      className: { type: String },
      caption: { type: String },
      width: { type: String },
    },
    render: Image,
  },
  download: {
    attributes: {
      text: { type: String },
      href: { type: String },
    },
    render: Download,
  },
  details: {
    attributes: {
      title: { type: String },
      description: { type: String }
    },
    render: Details,
  },
  elementIcon: {
    attributes: {
      draw: { type: String }
    },
    render: ElementIcon,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  nowrap: {
    render: ({children}) => (
      <span className='whitespace-nowrap'>{children}</span>
    ),
  },
  code: {
    render: ({children}) => (
      <code>{children}</code>
    ),
  },
  elink: {
    attributes: {
      href: { type: String }
    },
    render: ({children, href}) => (
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
      download: { type: Boolean },
    },
  },
}

export default tags
