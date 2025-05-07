Go to the terminal and run the following command.

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

OpenSSL will prompt you for some information for your certificate. You can fill it in, or you can leave it empty.

Finally run your application using https.
More information https://github.com/sagardere/set-up-SSL-in-nodejs