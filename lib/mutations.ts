import fetcher from './fetcher';

export const auth = (
  mode: 'signin' | 'signup',
  body: { email: string; password: string; firstName?: string; lastName?: string; userName?: string }
) => {
  return fetcher(`/${mode}`, body);
};
