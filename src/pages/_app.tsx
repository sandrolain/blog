import Layout from "../components/Layout";
import "../components/shades-of-purple.css";

export default function App(args) {
  const { Component, pageProps } = args;
  return (
    <Layout
      pageTitle="Sandro Lain"
      description="Personal Blog"
      url={args.router.route}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
