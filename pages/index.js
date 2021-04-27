import Head from 'next/head';
import Homepage from '../components/homepage/Homepage';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>floramate</title>
        <meta name="theme-color" content="#2f3e46" />
        <meta name="description" content="Helping you find wildlife-friendly plants for your area" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="floramate | homepage" />
        <meta property="og:description" content="Helping you find wildlife-friendly plants for your area" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.floramate.co.uk/" />
        <meta property="og:site_name" content="flormamate" />
        <meta name="twitter:title" content="floramate | homepage" />
        <meta name="twitter:description" content="Helping you find wildlife-friendly plants for your area" />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.floramate.co.uk/" />
        <meta lang="en"></meta>
      </Head>

      <Homepage data={data} />

    </>
  )
}

// Fetches profiles tagged as featured.
// Incremental static regeneration, combines quick
// client loading but allows for featured content to remain updated over time
export const getStaticProps = async () => {
  const res = await fetch(`https://floramate-cms.herokuapp.com/profiles?_limit=3&featured=true`)
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60
  }
}
