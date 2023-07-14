import { domain, clientId } from '../../auth-config.json'

export const environment = {
    production: false,
    apiUrl: 'https://localhost:7090',
    auth: {
        domain: "dev-bidilxy6y6edge7o.us.auth0.com",
        clientId: "5SxDhRJkonYFvJvaVqLcXX7hHTiN2zTk",
        redirectUri: window.location.origin
    }
};
