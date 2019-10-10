import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generatorSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

export const sendMail = (email) => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWORD
        }
    };
    console.log(options);
    const client = nodemailer.createTransport(sgTransport(options));

    return client.sendMail(email);
}

export const sendSecretMail = (address, secret) => {
    const email = {
        from: "yhk1777@naver.com",
        to: address,
        subject: "Login Secret from Prismagram",
        html: `Hello. You login secret it is <Strong>${secret}</Strong>.<br />Copy paste on the app/website to log in.`
    };

    return sendMail(email);
}