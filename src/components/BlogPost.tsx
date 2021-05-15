import Link from "next/link";
import Head from "next/head";
import { HeadBlock } from "../components/HeadBlock";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta key="ogtitle" property="og:title" content={meta.title} />
        <meta key="ogdescription" property="og:description" content={meta.description} />
        {meta.image ? <meta key="ogimage" property="og:image" content={`https://www.sandrolain.com${meta.image}`} /> : null}
      </Head>
      <style dangerouslySetInnerHTML={{__html: /*css*/`

        blockquote {
          display: inline-block;
          position: relative;
          margin: 1em 0;
          padding: 0em 3em;
        }

        blockquote::before {
          content: "“";
          position: absolute;
          left: 0;
          top: 0;
          font-size: 3em;
          line-height: 1em;
          color: #999;
        }

        blockquote::after {
          content: "”";
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 3em;
          line-height: 1em;
          color: #999;
        }

        article a {
          color: var(--primary-color-light);
        }

        article figure {
          margin: 1em 0;
        }

        article img {
          max-width: 100%;
        }

      `}}></style>
      <article>
        {meta.image ? <HeadBlock
          headTitle={meta.title}
          title={meta.title}
          description={meta.description}
          image={meta.image}
          imageAttribute={meta.imageAttribute}
          date={meta.date}
          back={true} /> : null}
        {children}
      </article>
    </>
  )
}
