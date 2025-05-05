interface Routes {
  home: string;
  monTravail: string;
  stage: string;
  stage1: string;
  stage2: string;
  veille: string;
  eps2: string;
  glpi: string;
}

export const routes: Routes = {
  home: '/',
  monTravail: '/mon-travail',
  stage: '/stage',
  stage1: '/stage/stage1',
  stage2: '/stage/stage2',
  veille: '/veille',
  eps2: '/eps2',
  glpi: '/glpi'
};

export function getFullPath(path: string): string {
  if (path === '/') return '/portfolio-elias/';
  return `/portfolio-elias${path}`;
} 