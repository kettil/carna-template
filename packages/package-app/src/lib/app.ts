import { Logger } from 'pino';

const app = async ({ env, log }: { env: NodeJS.ProcessEnv; log: Logger }): Promise<void> => {
  log.debug({ env }, 'ENV');

  // dummy await for esllint
  await new Promise((r) => setTimeout(r, 1000));
};

export { app };
