const dev = {
    STRIPE_KEY: 'pk_test_HWjO4KxJ0GKSUbdEggyqfpuT',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-api-dev-attachmentsbucket-axwpyp1w721p',
    },
    apiGateway:{
        REGION: 'us-east-1',
        URL: 'https://yz8uxm4ntc.execute-api.us-east-1.amazonaws.com/dev',
    },
    cognito:{
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_0d30e2ApH',
        APP_CLIENT_ID: '1d9pbq17jtujjgukkr27n31r96',
        IDENTITY_POOL_ID: 'us-east-1:98b11863-5bea-48fd-a59b-74f99f38ef07',
    }
};

const prod = {
    STRIPE_KEY: 'pk_test_HWjO4KxJ0GKSUbdEggyqfpuT',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-api-prod-attachmentsbucket-889hqmurxl70',
    },
    apiGateway:{
        REGION: 'us-east-1',
        URL: 'https://p2xybpklfb.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito:{
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_HCWmCpMnM',
        APP_CLIENT_ID: '7rltpppl7v7ogmpsqs2thf18n6',
        IDENTITY_POOL_ID: 'us-east-1:d541a654-30aa-4ec9-9068-a5563fc46db2',
    }
}

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
}