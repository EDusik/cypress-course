import { Server } from 'miragejs';

import profileGitHub from './mocks/profileGitHub.json';
import projectsGitHub from './mocks/projectsGitHub.json';

import { environment } from './environments/environments';

export function makeServer({ env = 'development' } = {}) {

  let server = new Server({
    env,
    routes() {
      // https://api.github.com/users/<USERNAME>
      this.get(`${environment.url}${environment.user}/`, () => profileGitHub);
      // https://api.github.com/users/<USERNAME>/repos
      this.get(`${environment.url}${environment.user}/repos`, () => projectsGitHub);
    }
  });

  return server;
}
