import nodemailer from "nodemailer";

let _transporter = null;

const buildTransporter = () => {

    // Office365: 587 + STARTTLS => secure=false + requireTLS=true
    return nodemailer.createTransport({
        host: config.smtpHost,
        port: config.smtpPort,
        secure: config.smtpSecure,
        auth: config.smtpAuth ? { user: config.mailUser, pass: config.mailPass } : undefined,
        requireTLS: true,
    });
};

export const getMailer = () => {
    if (!_transporter) _transporter = buildTransporter();
    return _transporter;
};

export const sendMail = async ({ to, subject, text, html }) => {

    if (!config.mailOnline) {
        console.log("📩 [MAIL OFFLINE] To:", to);
        console.log("Subject:", subject);
        console.log(text || html);
        return true;
    }

    const transporter = getMailer();

    await transporter.sendMail({
        from: `"${config.mailFromName}" <${config.mailFrom}>`,
        to,
        subject,
        text,
        html,
    });

    return true;
};