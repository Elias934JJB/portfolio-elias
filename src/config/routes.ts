export const routes = {
  home: '/',
  monTravail: '/mon-travail',
  stage: '/stage',
  stage1: '/stage1',
  stage2: '/stage2',
  veille: '/veille',
  eps2: '/eps2',
  glpi: '/glpi'
} as const;

export const getFullPath = (path: string) => {
  return `/portfolio-elias${path}`;
}; 