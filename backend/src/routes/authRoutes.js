import express from 'express';
import { signup, login } from '../controller/authController.js';
import { authenticate, authorizeRoles } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Example protected route
router.get('/admin', authenticate, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

export default router;
