import type { ValidateOptions } from 'yup/lib/types';
import { envSchema } from './envSchema';

const yupOptions: ValidateOptions = {
  abortEarly: false,
  recursive: true,
  strict: false,
  stripUnknown: true,
};

export { yupOptions, envSchema };
