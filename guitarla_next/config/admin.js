module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '46e2cec328f5dfbf004ca7f99a008e83'),
  },
});
