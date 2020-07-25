import React, { Component } from "react";
import { Head, Link } from 'mdx-go'
import { Global, css } from '@emotion/core';
import styled from "@emotion/styled";
import signatureImg from "./assets/3ad39970a957a5f28905d8030813c3fb.png"
import appleTouchIcon from "./assets/apple-touch-icon.png";
import favicon from "./assets/favicon.ico";
// favicon: https://favicon.io/favicon-generator/ - Timmana, 110


const HeadPhotoCnt = styled("div")`
  position: relative;
  margin: calc(var(--body-padding) * -1) calc(var(--body-padding) * -1) 0;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    vertical-align: top;
    background: #000000;
    border-radius: 5px 5px 0px 0px;
  }

  div {
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

    a {
      color: inherit;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const HeadPhoto = (props) => (
  <HeadPhotoCnt>
    <img src={props.src} alt={props.alt} />
    {props.author && <div>{props.author}</div>}
    {props.children && <div>{props.children}</div>}
  </HeadPhotoCnt>
);

export const Signature = () => <div style={{textAlign: "left"}}><img src={signatureImg} style={{
  height: "32px"
}} /></div>;


export const HeadBlock = (attrs) => {
  return <>
    <Head>
      <title>{attrs.headTitle || attrs.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" href={favicon} />
    </Head>
    <HeadPhoto src={attrs.src} alt={attrs.alt}>{attrs.author}</HeadPhoto>
    <h1>{attrs.title}</h1>
  </>;
}

export class ReposList extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/sandrolain/repos")
      .then(res => res.json())
      .then((repos) => {
        const res = repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          updated_at: repo.updated_at,
          language: repo.language
        }));
        res.sort((a, b) => (new Date(b.updated_at) - new Date(a.updated_at)))
        return res;
      })
      .then(repos => this.setState({ repos }));
  }

  render() {
    return (<>
      <Global styles={css`
        #repos-list {
          margin: 0 -1.6em 1em;
          padding: 1em 1.6em;
          line-height: 1em;
          border-top: 1px solid var(--secondary-color);

          h3 {
            color: var(--secondary-color-dark);
          }
          ul, li {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -1.6em 1em;
          }
          li {
            width: 50%;
          }
          @media (max-width: 768px) {
            & li {
              width: 100%;
            }
          }
          a {
            display: block;
            text-decoration: none;
            border-top: 1px solid hsl(220, 80%, 20%, 0.1);
            padding: 1em 1.6em;
            border-radius: 4px;
            font-size: 0.8em;

            &:hover {
              background: hsl(220, 80%, 20%, 0.05);
            }
          }
          h4 {
            margin: 0;
          }
          p {
            margin: 0;
            font-size: 0.9em;
            color: var(--primary-color-light);
          }
        }
      `} />

      <div id="repos-list">
        <h3>My GitHub Repos</h3>
        <ul>
          {this.state.repos.map(el => (
            <li key={el.id}><a href={el.url}>
              <h4>{el.description}</h4>
              <p>{el.language}</p>
            </a></li>
          ))}
        </ul>
      </div>
    </>);
  }
}


const PostItemCnt = styled("div")`
  margin: 0 -1.6em 1em;
  line-height: 1em;

  a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid hsl(220, 80%, 20%, 0.1);
    padding: 1em 1.6em;
    border-radius: 4px;

    &:hover {
      background: hsl(220, 80%, 20%, 0.05);
    }
  }
  &:last-child a {
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
`;

export const PostItem = (props) => (
  <PostItemCnt>
    <Link href={props.href}>
      <h2>{props.children}</h2>
      <span>{props.date}</span>
    </Link>
  </PostItemCnt>
);
