import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/student',
    route: StudentRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
