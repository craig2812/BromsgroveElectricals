import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/*<section className={utilStyles.headingMd}>*/}
      {/*  <p>Hey this is just a test</p>*/}
      
      {/*  <main>*/}
      {/*    <h1 className={utilStyles.title}>*/}
      {/*      Read <Link href="/posts/first-post">this page!</Link>*/}
      {/*    </h1>*/}
      
      {/*    <p className={utilStyles.description}>*/}
      {/*      Get started by editing <code>pages/index.js</code>*/}
      {/*    </p>*/}
      
      {/*    <div className={utilStyles.grid}>*/}
      {/*      <a href="https://nextjs.org/docs" className="card">*/}
      {/*        <h3>Services &rarr;</h3>*/}
      {/*        <p>Find in-depth information about Next.js features and API.</p>*/}
      {/*      </a>*/}
      
      {/*      <a href="https://nextjs.org/learn" className="card">*/}
      {/*        <h3>Testimonials &rarr;</h3>*/}
      {/*        <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
      {/*      </a>*/}
      
      {/*      <a*/}
      {/*        href="https://github.com/vercel/next.js/tree/master/examples"*/}
      {/*        className="card"*/}
      {/*      >*/}
      {/*        <h3>Prices &rarr;</h3>*/}
      {/*        <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
      {/*      </a>*/}
      
      {/*      <a*/}
      {/*        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*        className="card"*/}
      {/*      >*/}
      {/*        <h3>Contact &rarr;</h3>*/}
      {/*        <p>*/}
      {/*          Instantly deploy your Next.js site to a public URL with Vercel.*/}
      {/*        </p>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </main>*/}
      {/*</section>*/}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
