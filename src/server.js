import { Server } from 'miragejs';

import profileGitHub from './mocks/profileGitHub.json';
import projectsGitHub from './mocks/projectsGitHub.json';

export function makeServer({ environment = 'development' } = {}) {

  let server = new Server({
    environment,
    routes() {
      this.get('/', () => projectsGitHub);
      this.get('/', () => profileGitHub);
    }
  });

  return server;
}
