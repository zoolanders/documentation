import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {globbySync} from 'globby';

export function getPostSlugs(dir) {
  return [
    ...globbySync(join('src/pages', dir, '*.md')),
    ...globbySync(join('src/pages', dir, '/*/index.md'))
  ]
}

export function getPost(filepath, fields = []) {
  const realSlug = filepath.replace(/\.md$/, '').replace('src/pages', '').replace('/index', '')
  const fileContents = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(dir, fields = []) {
  const slugs = getPostSlugs(dir)
  const posts = slugs
    .map(filepath => getPost(filepath, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
