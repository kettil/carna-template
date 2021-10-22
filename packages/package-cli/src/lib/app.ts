import { Logger } from 'pino';

const app = async ({ env, log }: { env: NodeJS.ProcessEnv; log: Logger }): Promise<void> => {
  log.debug({ env }, 'ENV');

  // dummy await for eslint
  await new Promise((r) => setTimeout(r, 2000));
};

export { app };
