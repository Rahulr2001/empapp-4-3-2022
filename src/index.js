import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'


const myAppConfig = {
    "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:fe8e9cb5-72c7-434a-9d2b-0c0bd8f5e40e",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_DHp6QpKbU",
    "aws_user_pools_web_client_id": "7ud836d8tr2pialvbo5bh2aib1",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "empappfbadb69de490140f5b4d5c735389a66f5223320-dev",
    "aws_user_files_s3_bucket_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://v5h6tltg5fg3fpb2hw6sbvga3e.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_appsync_apiKey": "da2-pebeatxy4vewrouzigiylxlngi"
}


Amplify.configure(myAppConfig);

ReactDOM.render(
  <AmplifyProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AmplifyProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();