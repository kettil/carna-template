/* eslint-disable node/no-sync -- initialization file */
import { resolve } from 'path';
import dotenv from 'dotenv';
import pino, { final, stdSerializers } from 'pino';
import { app } from './lib/app';
import { envSchema, yupOptions } from './lib/schemas';

if (require.main !== module) {
  throw new Error('The file must be called directly via node.js');
}

dotenv.config({ path: resolve(process.cwd(), process.env.DOTENV_CONFIG_PATH ?? '.env') });

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
