export default {
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-upload-54321',
    },
    apiGateway:{
        REGION: 'us-east-1',
        URL: 'https://nbh32ekfy3.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito:{
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_84x5pLqZw',
        APP_CLIENT_ID: '326glho8i0og0pugn41qkcac5u',
        IDENTITY_POOL_ID: 'us-east-1:75db65ed-86c7-4c4c-99b5-7b65b55e7132',
    }
}