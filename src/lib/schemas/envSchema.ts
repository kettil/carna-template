import { LevelWithSilent } from 'pino';
import * as yup from 'yup';

const envSchema = yup
  .object({
    /* eslint-disable @typescript-eslint/naming-convention -- ENV variable */

    LOG_LEVEL: yup
      .mixed<LevelWithSilent>()
      .oneOf(['debug', 'trace', 'info', 'warn', 'error', 'fatal', 'silent'])
      .default('warn'),

    /* eslint-enable @typescript-eslint/naming-convention -- ENV variable */
  })
  .default(undefined)
  .required();

export { envSchema };
