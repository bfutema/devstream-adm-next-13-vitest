import { StartOptions } from 'msw';

const IS_BROWSER = typeof window !== 'undefined';

export const setupMocks = async () => {
  const config: StartOptions = { onUnhandledRequest: 'bypass' };

  if (IS_BROWSER) {
    import('./worker').then(({ worker }) => worker.start(config));
  } else {
    import('./server').then(({ server }) => server.listen(config));
  }
};
