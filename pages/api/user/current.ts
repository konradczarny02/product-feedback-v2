import { validateRoute } from '../../../lib/auth';

export default validateRoute((req, res, user) => {
  const { password, createdAt, updatedAt, ...rest } = user;
  res.json(rest);
});
