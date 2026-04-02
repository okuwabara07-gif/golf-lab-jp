import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゴルフLab',
  description: 'ゴルフ上達・用具情報',
  keywords: 'ゴルフLab,ゴルフ上達・用具情報',
  openGraph: {
    title: 'ゴルフLab',
    description: 'ゴルフ上達・用具情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ゴルフLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゴルフLab',
    description: 'ゴルフ上達・用具情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "ゴルフLab", "description": "ゴルフ上達・用具情報", "url": "https://golf-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://golf-lab-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
