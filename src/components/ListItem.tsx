import Link from "next/link"

export const ListItem = ({ post }) => {
  const { link, module: { meta }, } = post
  return (
    <>
    <style jsx>{/*css*/`
      .item {
        margin: 0 -1.6em;
        line-height: 1em;
      }
      a {
        display: block;
        text-decoration: none;
        border-bottom: 1px solid hsl(220, 80%, 20%, 0.1);
        padding: 1em 1.6em;
        border-radius: 4px;
      }
      a:hover {
        background: hsl(220, 80%, 20%, 0.05);
      }
      .item:last-child a {
        border-bottom: none;
      }
      h2 {
        font-weight: 200;
        margin-top: 0;
        margin-bottom: 0;
        line-height: 1em;
      }

      span {
        display: block;
        line-height: 1.5em;
        color: var(--primary-color-lighter);
      }
    `}</style>
      <Link href={"/blog" + link}>
        <a className="item">
          <h2>{meta.title}</h2>
          <span suppressHydrationWarning>{Intl.DateTimeFormat("en-UK", {
            hour12: false,
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric"
          }).format(new Date(meta.date))}</span>
        </a>
      </Link>
    </>
  )
}





