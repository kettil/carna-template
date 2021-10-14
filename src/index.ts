import pino, { final } from 'pino';
import { app } from './lib/app';

if (require.main !== module) {
  throw new Error('The file must be called directly via node.js');
}

// dotenv.config({ path: path.resolve(process.cwd(), process.env.DOTENV_CONFIG_PATH ?? '.env') });
// const env = yupSchema.validateSync(process.env, schemaOptions);

const { env } = process;
const log = pino({
  level: env.NODE_ENV === 'production' ? 'warn' : 'trace',
  serializers: {
    err: pino.stdSerializers.err,
    error: pino.stdSerializers.err,
  },
});

app({ env, log }).catch((error: unknown) => {
  final(log).fatal({ error }, 'Unexpected error');
});
