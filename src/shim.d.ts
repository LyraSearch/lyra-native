import type {AttributifyAttributes} from '@unocss/preset-attributify';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions,@typescript-eslint/naming-convention
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
