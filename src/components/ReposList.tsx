import React, { Component } from "react";

interface Repo {
  id: string;
  url: string;
  description: string;
  language: string;
}

export class ReposList extends Component<any, { repos: Repo[] }> {
  constructor(props) {
    super(props);
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
        res.sort((a, b) => (new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()))
        return res;
      })
      .then(repos => this.setState({ repos }));
  }

  render() {
    return (<>
      <style jsx>{/*css*/`
        #repos-list {
          margin: 0 -1.6em 1em;
          padding: 1em 1.6em;
          line-height: 1em;
          border-top: 1px solid var(--secondary-color);
        }
        #repos-list h3 {
          color: var(--secondary-color-dark);
        }
        #repos-list ul,
        #repos-list li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        #repos-list ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -1.6em 1em;
        }
        #repos-list li {
          width: 50%;
        }
        @media (max-width: 768px) {
          #repos-list li {
            width: 100%;
          }
        }
        #repos-list a {
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
        #repos-list h4 {
          margin: 0;
        }
        #repos-list p {
          margin: 0;
          font-size: 0.9em;
          color: var(--primary-color-light);
        }
      `}</style>

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

