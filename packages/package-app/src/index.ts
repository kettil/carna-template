/* eslint-disable node/no-sync -- initialization file */
import { resolve } from 'path';
import dotenv from 'dotenv';
import pino, { final, stdSerializers } from 'pino';
import { app } from './lib/app';
import { envSchema, yupOptions } from './lib/schemas';

if (require.main !== module) {
  throw new Error('The file must be called directly via node.js');
}

[process.env.DOTENV_CONFIG_PATH, '.env'].forEach((path) =>
  dotenv.config({ encoding: 'utf8', path: resolve(process.cwd(), path ?? '') }),
);

const env = envSchema.validateSync(process.env, yupOptions);

const log = pino({
  level: env.LOG_LEVEL,
  serializers: {
    err: stdSerializers.err,
    error: stdSerializers.err,
  },
});

app({ env, log }).catch((error: unknown) => {
  final(log).fatal({ error }, 'Unexpected error');
});
