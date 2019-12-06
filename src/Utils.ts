import md5Hex from 'md5-hex';

const FW_URL = 'https://ssl.filmweb.pl/api';
const FW_RPC_URL = 'https://www.filmweb.pl/rpc/userFilmRemoteService';
const VERSION = '1.0';
const APPID = 'android';
const SECRET = 'qjcGhW2JnvGT9dfCt3uT_jozR3s';
const METHODS = {
    LOGIN: 'login',
    FILM_DESCRIPTION: 'getFilmDescription'
};

const getSignature = (method: string) => {
    let signature = method + '\\n' + APPID + SECRET;
    return VERSION + ',' + md5Hex(signature);
};

export {
    FW_URL,
    FW_RPC_URL,
    VERSION,
    APPID,
    METHODS,
    getSignature
};