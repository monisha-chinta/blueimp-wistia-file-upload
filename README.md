# blueimp-wistia-file-upload
## Description
Upload videos to Wistia account using Blueimp File Upload plugin. 
## Setup
Clone the repository 
    
    git clone git@github.com:monisha-chinta/blueimp-wistia-file-upload.git

Install local NPM packages

    cd blueimp-wistia-file-upload
    npm install


Set Wistia access password in services/apiToken.js

    app.constant('api_token', '<access_token>');

Run Express server

    node expressServer.js

    * This server runs on port: 3001
    * Open localhost:3001 to view the page



## Usage

    <wistia-file-upload token="<token>"></wistia-file-upload>
