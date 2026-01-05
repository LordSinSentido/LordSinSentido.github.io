import { Title, Meta, Link } from 'react-head'

interface SEOProps {
  title?: string
  description?: string
}

const SITE_URL = 'https://lordsinsentido.github.io/'
const DEFAULT_TITLE = 'Miguel Sosa — Software Engineer'
const DEFAULT_DESC = `With 3 years of experience, I worked along companies to provide 
  them backend and frontend solutions with my services as a software engineer. 
  I'm specializing in REST API servers, microservices, and Jenkins pipelines`

export default function SEO({ title, description }: SEOProps) {
  const finalTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
  const finalDescription = description || DEFAULT_DESC

  return (
    <>
      <Title>{finalTitle}</Title>
      <Meta name='description' content={finalDescription} />
      <Meta name='author' content='Miguel Sosa' />
      <Link rel='canonical' href={SITE_URL} />

      <Meta property='og:title' content={finalTitle} />
      <Meta property='og:description' content={finalDescription} />
      <Meta property='og:url' content={SITE_URL} />
      <Meta property='og:type' content='website' />
      <Meta
        property='og:image'
        content='https://v1a4c4yut32jfys8.public.blob.vercel-storage.com/seo-image.png'
      />

      <Meta name='twitter:card' content='summary_large_image' />
    </>
  )
}
