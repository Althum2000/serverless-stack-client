export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51Gs5K2IgKWQ8xFFgT8riy57ObIoJ69pLshSYSKkHmERnHkbiGvCxmEDCj8McZThY8PFVwUDOrTXHy5679fMv1sMM00JkvIbTr3",
    s3: {
        REGION: "eu-west-2",
        BUCKET: "notes-app-uploads-cjmcrae"
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://jwgmfuz6e8.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_15BanJzmG",
        APP_CLIENT_ID: "1195mpfh3jvbtta2b2ut94mt05",
        IDENTITY_POOL_ID: "eu-west-2:50e89672-08d1-4f15-b6ce-0e60a0252046"
    }
};