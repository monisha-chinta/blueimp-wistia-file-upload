# blueimp-wistia-file-upload
## Description
Upload videos to Wistia account using Blueimp File Upload plugin. 
## Setup
Clone the repository 
    
    git clone git@github.com:monisha-chinta/blueimp-wistia-file-upload.git

Install local NPM packages

    npm install


Set Wistia access password in services/apiToken.js

    app.constant('api_token', '<access_token>');

Run Express server

* This server runs on port: 3001



## Usage

    <wistia-file-upload token="<token>"></wistia-file-upload>
