import React, { useEffect, useState } from 'react';
import { getRepositories } from '../../services/api';
import { Repositories } from '../../styles/Repositories/Repositories';

const Projects = () => {

  const [state, setState] = useState({
    repositories: []
  });

  useEffect(() => {
    getRepositories().then(response => {
      setState(previousState => ({
        ...previousState,
        repositories: response.data
      }));
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Repositories> 
      <div className='repositories' data-test='repositories'>
        {state.repositories.length > 0 ?
          state.repositories.map((repo) => {
            return (
              <div className='repository' key={repo.id}>
                <a href={repo.html_url} target='_blank' rel='noopener noreferrer' data-test={repo.name}>{repo.name}</a>
                <i>{repo.full_name ? repo.full_name : ""}</i>
                <p>{repo.description ? repo.description : ""}</p>
                <span className='language'>{repo.language ? repo.language : ""}</span>
              </div>
            );
          }) :
          <p className='no-repo'>Loading...</p>
        }
      </div>
    </Repositories>
  );
}

export default Projects;
