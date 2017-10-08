export const production = true;

let developmentConfig = {
    url: 'http://0.0.0.0:3000',
    api: 'http://0.0.0.0:3000/api',
    host: '0.0.0.0',
    port: '3000'
};

let productionConfig = {
    url: 'http://0.0.0.0:3000',
    api: 'http://0.0.0.0:3000/api',
    host: '0.0.0.0',
    port: '3000'
}

export default production ? productionConfig : developmentConfig;