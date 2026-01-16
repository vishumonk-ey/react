// There is nothing inherently wrong with the code structure for importing VITE_ environment variables.
// However, make sure your environment variable names in your `.env` file exactly match 
// those expected here. Vite requires environment variables to be prefixed with `VITE_`.

// For example, your `.env` should have:
    // VITE_SMTP_HOST=...
    // VITE_SMTP_PASSWORD=...
    // VITE_SENDER_EMAIL=...
    // VITE_SMTP_PORT=...

// Also, double-check the spelling of your filename: it should be `config.js`, not `conifg.js`.
// (You wrote `conifg.js`, which could cause import issues.)

export const config = {
  smtp_Host: import.meta.env.VITE_SMTP_HOST,
  smtp_HostPassword: import.meta.env.VITE_SMTP_PASSWORD,
  senderEmail: import.meta.env.VITE_SENDER_EMAIL,
  smtp_port: import.meta.env.VITE_SMTP_PORT,
};
