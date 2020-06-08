const dev = {
    STRIPE_KEY: 'pk_test_HWjO4KxJ0GKSUbdEggyqfpuT',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1f603h3iwi17k',
    },
    apiGateway:{
        REGION: 'us-east-1',
        URL: ' https://paibb63tli.execute-api.us-east-1.amazonaws.com/dev',
    },
    cognito:{
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_fdC46OggO',
        APP_CLIENT_ID: '6hsup2cu3237oeomj9ddcltsn9',
        IDENTITY_POOL_ID: 'us-east-1:948f1f4c-d3be-4d93-9985-1896011b2b28',
    }
};

const prod = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_HWjO4KxJ0GKSUbdEggyqfpuT',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1q0jazdlsm6e0',
    },
    apiGateway:{
        REGION: 'us-east-1',
        URL: 'https://ynrirr6yu5.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito:{
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_6nY6lsU5j',
        APP_CLIENT_ID: '7d7igb2aovj00juh9l5pdpbqn',
        IDENTITY_POOL_ID: 'us-east-1:da3c9f40-6e16-45be-b90d-f76c99c6a61a',
    }
}

const config = processs.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
}