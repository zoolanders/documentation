import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { DocHero } from '@/components/DocHero'
import { DocContent } from '@/components/DocContent'

export function DocLayout({ children, navigations, markdoc = {} }) {
  const router = useRouter()
  const pathname = router.pathname
  const {frontmatter = {}, content = []} = markdoc

  const navigation = navigations[pathname] || []

  return (
    <>
      <Header navigation={navigation} />
      {frontmatter.hero && <DocHero {...frontmatter.hero}/>}
      <DocContent navigation={navigation} frontmatter={frontmatter} content={content}>
        {children}
      </DocContent>
    </>
  )
}
