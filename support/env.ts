import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    SAUCE_URL:
        process.env.SAUCE_URL ?? '',

    QA_PLAYGROUND_URL:
        process.env.QA_PLAYGROUND_URL ?? '',

    SAUCE_USERNAME:
    process.env.SAUCE_USERNAME ?? '',

    SAUCE_PASSWORD:
    process.env.SAUCE_PASSWORD ?? ''
};
