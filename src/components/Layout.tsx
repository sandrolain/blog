import Head from "next/head";
import favicon from "./apple-touch-icon.png";
import photo from "./photo.jpg";
import vaporwave from "./vaporwave.png";
// import Highlight from "react-highlight.js";
import {
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  RedditIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";


export default function Layout({ children, pageTitle, description, url }) {
  const shareUrl = `https://www.sandrolain.com${url}`;
  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="description" name="description" content={description}></meta>
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta key="ogtitle" property="og:title" content={pageTitle} />
        <meta key="ogdescription" property="og:description" content={description} />
        <meta key="ogimage" property="og:image" content={vaporwave} />
        <link href={shareUrl} rel="canonical" />
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <style dangerouslySetInnerHTML={{__html: /*css*/`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        :root {
          --sans-serif-font: 'Oswald', sans-serif;
          --serif-font: 'Playfair Display', serif;
          --primary-color-blacky: hsl(240, 100%, 5%);
          --primary-color-verydark: hsl(240, 100%, 10%);
          --primary-color-verydark-50: hsl(240, 100%, 10%, 0.3);
          --primary-color-dark: hsl(220, 80%, 20%);
          --primary-color-light: hsl(240, 50%, 40%);
          --primary-color-lighter: hsl(220, 60%, 60%);
          --primary-color-sowhite: hsl(220, 60%, 80%);
          --secondary-color: hsl(292deg, 67%, 49%);
          --secondary-color-dark: hsl(292deg, 67%, 25%);
          --not-black-color: hsl(220, 40%, 10%);
          --body-padding: 3em;
        }

        @media (min-width: 421px) and (max-width: 768px) {
          :root {
            --body-padding: 2em;
          }
        }

        @media (max-width: 420px) {
          :root {
            --body-padding: 1em;
          }
        }

        html, body {
          margin: 0;
          padding: 0;
          font-size: 20px;
        }
        html {
          min-height: 100%;
        }
        body {
          font-family: 'Playfair Display', serif;
          line-height: 1.8em;
          min-height: 100%;
          background: #000000;
          background-image:
            url(${vaporwave}),
            linear-gradient(180deg, var(--primary-color-blacky), var(--primary-color-verydark));
          background-size: 100% auto, 100% 100vh;
          background-position: 50% 100%;
          background-attachment: fixed;
          background-blend-mode: screen;
          background-repeat: repeat-x, no-repeat;
        }

        a {
          color: var(--primary-color-light);
        }

        h1 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-light);
          font-weight: 200;
          font-size: 2.2em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        h2 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-dark);
          font-weight: 400;
          font-size: 1.6em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        h3 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-dark);
          font-weight: 400;
          font-size: 1.25em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        h4 {
          font-family: var(--sans-serif-font);
          color: var(--primary-color-dark);
          font-weight: 400;
          font-size: 1em;
          margin-top: 1.2em;
          line-height: 1em;
        }

        b, strong {
          color: var(--primary-color-dark);
        }

        p code {
          background-color: var(--primary-color-verydark);
          color: var(--primary-color-sowhite);
          padding: 0.1em 0.4em;
          border-radius: 4px;
        }

        .hljs {
          padding: calc(var(--body-padding) * 0.618);
          margin: 2em calc(var(--body-padding) * -0.618);
          border-radius: 4px;
          font-size: 16px;
          line-height: 1.6em;
          background-color: var(--primary-color-verydark);
        }


        #head {
          padding: 1em 0;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          font-family: var(--sans-serif-font);
        }

        #head em {
          font-family: var(--serif-font);
        }

        #head img {
          width: 2em;
          height: 2em;
          border-radius: 50%;
          margin-right: 1em;
        }

        #head a {
          font-size: 1.618em;
          color: inherit;
          text-decoration: none;
          font-weight: lighter;
        }

        @media (max-width: 768px) {
          #head {
            justify-content: center;
          }
          #head img {
            display: none;
          }
        }

        #body {
          background: hsl(30deg, 20%, 95%);
          color: var(--not-black-color);
          padding: var(--body-padding);
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        #share {
          margin-top: 3em;
          border-top: 1px solid var(--secondary-color);

          h4 {
            margin-bottom: 0.5em;
          }

          button {
            margin-right: 0.25em;
          }
        }

        #foot {
          padding: 2em;
          background: var(--primary-color-verydark-50);
          backdrop-filter: blur(6px);
          line-height: 1em;
          margin: 1em 0;
          color: #FFFFFF;
          display: flex;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          #foot {
            padding: 1em;
            flex-direction: column;
          }

          #foot div:last-child {
            margin-top: 1em;
          }
        }

        #foot div {
          flex: 1;
          font-size: 0.8em;
          color: var(--primary-color-lighter);
        }

        #foot div:last-child {
          text-align: right;
        }

        #foot a {
          color: inherit;
        }

        #root {
          max-width: 768px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          #root {
            margin: 0 1em;
          }
        }

      `}}></style>
      <div id="root">
        <div id="head">
          <img src={photo} />
          <a href="/">Sandro Lain <em>Personal Blog</em></a>
        </div>
        <main id="body">
          {children}
          <div id="share">
            <h4>Share this page</h4>
            <EmailShareButton url={shareUrl}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <RedditShareButton url={shareUrl}>
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </div>
        </main>
        <footer id="foot">
          <div>
            me @ <a href="https://github.com/sandrolain">github</a> - <a href="http://it.linkedin.com/in/sandrolain">linkedin</a> - <a href="http://twitter.com/sandro_lain/">twitter</a>
          </div>
          <div>
            Made with <a href="https://nextjs.org/">Next.js</a> on <a href="https://www.netlify.com/">Netlify</a>
          </div>
        </footer>
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-522672-3"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "UA-522672-3");
      `}}></script>
    </>
  );
}
