import config from './config';

const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
    // 4
    return fetch(config.api, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
})

const environment = new Environment({
    network,
    store,
});

export default environment