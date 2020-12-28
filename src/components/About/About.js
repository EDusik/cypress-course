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
        <img type='image' data-test='avatar' data-cy='cy-avatar' src={state.profile.avatar_url} alt={state.profile.login} />
        <h1>{state.profile.name ? state.profile.name : ""}</h1>
        <h2>{state.profile.company ? state.profile.company : ""}</h2>
        <span data-test='profile-create-at' data-cy='cy-profile-create-at'>Create at: {formatDate(state.profile.created_at)}</span>
        <span data-test='profile-updated-at' data-cy='cy-profile-updated-at'>Last update: {formatDate(state.profile.updated_at)}</span>
        <p data-test='profile-bio' data-cy='cy-profile-bio'>{state.profile.bio ? state.profile.bio : ""}</p>
      </div>
    </Profile>
  );
}

export default About;
