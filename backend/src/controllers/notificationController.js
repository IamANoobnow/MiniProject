const Notification = require('../models/notificationModel');

// Send a notification
exports.sendNotification = async (req, res) => {
    try {
        const { message } = req.body;

        const notification = new Notification({
            user_id: req.userId,
            message,
            sent_at: new Date(),
            is_read: false
        });

        await notification.save();
        res.status(201).json({ message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user notifications
exports.getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user_id: req.userId });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Mark notification as read
exports.markNotificationAsRead = async (req, res) => {
    try {
        await Notification.findByIdAndUpdate(req.params.notification_id, { is_read: true });
        res.json({ message: 'Notification marked as read' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
