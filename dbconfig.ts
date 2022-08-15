import dotenv from 'dotenv';
dotenv.config();

interface IOptions {
    trustedConnection: boolean | undefined;
    enableArithAbort: boolean | undefined;
    trustServerCertificate: boolean | undefined;
}

interface IConfig {
    driver?: string | undefined;
    user?: string | undefined;
    password?: string | undefined;
    server: string;
    port?: number | undefined;
    database?: string | undefined;
    options?: IOptions | undefined;
}

const config: IConfig = {
    user: process.env.USER_API,
    password: process.env.PASSWORD,
    server: 'localhost',
    port: Number(process.env.PORT),
    database: process.env.DATABASE,
    options: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
};

export default config;
