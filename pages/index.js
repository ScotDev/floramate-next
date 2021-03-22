import Head from 'next/head';
import Homepage from '../components/homepage/Homepage';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>floramate</title>
        <meta name="theme-color" content="#2f3e46" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage data={data} />

    </>
  )
}

// should only fetch profiles tagged as featured
export const getStaticProps = async () => {
  const res = await fetch(`https://floramate-cms.herokuapp.com/profiles?_limit=3&featured=true`)
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60
  }
}
