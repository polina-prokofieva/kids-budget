import type { User } from 'firebase/auth';

import InsideRoutes from './InsideRoutes';
import OutsideRoutes from './OutsideRoutes';

export default function AppRoutes({
  user,
}: {
  user: User | null;
}) {
  return !user ? <OutsideRoutes /> : <InsideRoutes />;
}
