
export const HeadBlock = (props) => {
  return <>
    <style jsx global>{/*css*/`
      #head-photo {
        position: relative;
        margin: calc(var(--body-padding) * -1) calc(var(--body-padding) * -1) 0;
      }

      #head-photo img {
        width: 100%;
        height: 320px;
        object-fit: cover;
        vertical-align: top;
        background: #000000;
        border-radius: 5px 5px 0px 0px;
      }

      #head-photo-attribute {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0.5em;
        background: rgba(0, 0, 0, 0.7);
        color: #FFFFFF;
        font-size: 12px;
        font-family: var(--sans-serif-font);
        line-height: 1em;
        opacity: 0.5;
      }
      #head-photo-attribute:hover {
        opacity: 1;
      }

      #head-photo-attribute a {
        color: inherit;
      }


      #head-date {
        color: var(--primary-color-lighter);
        line-height: 1em;
        margin: -1em 0 1.5em;
      }

    `}</style>
    <div id="head-photo">
      <img src={props.image.src} alt={props.alt} />
      {props.imageAttribute && <div id="head-photo-attribute">{props.imageAttribute}</div>}
      {props.children && <div>{props.children}</div>}
    </div>
    <h1>{props.title}</h1>
    {props.date ? <div id="head-date" suppressHydrationWarning>{Intl.DateTimeFormat("en-UK", {
      hour12: false,
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date(props.date))}</div> : null}
  </>;
}
