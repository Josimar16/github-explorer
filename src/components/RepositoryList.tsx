import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<IRepository[]>();

  useEffect(() => {
    fetch('https://api.github.com/users/josimar16/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories && repositories.map((repository, index) =>
          <RepositoryItem key={index} repository={repository} />
        )}
      </ul>
    </section>
  );
}