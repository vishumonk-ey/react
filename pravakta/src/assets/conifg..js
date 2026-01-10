export const config = {
  smtp_Host: import.meta.env.VITE_SMTP_HOST,
  smtp_HostPassword: import.meta.env.VITE_SMTP_PASSWORD,
  senderEmail: import.meta.env.VITE_SENDER_EMAIL,
  smtp_port : import.meta.env.VITE_SMTP_PORT
};
