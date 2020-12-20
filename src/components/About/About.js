import React, { useEffect,  useState } from 'react';
import { getUser } from '../../services/api';

import { Profile } from '../../styles/Profile/Profile';
import { formatDate } from '../../utils/dateUtil';

const About = () => {

  const [state, setState] = useState({
    profile: {}
  });

  useEffect(() => {
    getUser().then(response => {
      setState(previousState => ({
        ...previousState,
        profile: response.data
      }));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Profile>
      <div className='profile'>
        <img type='image' data-test='avatar' src={state.profile.avatar_url} alt={state.profile.login} />
        <h1>{state.profile.name}</h1>
        <h2>{state.profile.company}</h2>
        <span data-test='profile-create-at'>Create at: {formatDate(state.profile.created_at)}</span>
        <span data-test='profile-updated-at'>Last update: {formatDate(state.profile.updated_at)}</span>
        <p data-test='profile-bio'>{state.profile.bio}</p>
      </div>
    </Profile>
  );
}

export default About;
