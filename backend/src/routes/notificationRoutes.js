const express = require('express');
const { sendNotification, getUserNotifications, markNotificationAsRead } = require('../controllers/notificationController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Send a notification (protected route)
router.post('/', authMiddleware, sendNotification);

// Get all notifications for the user (protected route)
router.get('/', authMiddleware, getUserNotifications);

// Mark a notification as read (protected route)
router.put('/:notification_id/read', authMiddleware, markNotificationAsRead);

module.exports = router;
