#!/bin/bash

APP_NAME="WinklerHalwachsWebsite"
DEPLOY_PATH="/var/www/winkler-halwachs"

echo "Load Angular app..."
npm install

echo "Building Angular app..."
ng build --configuration production

echo "Clearing old files..."
sudo rm -rf $DEPLOY_PATH/*

echo "Copying new build..."
sudo cp -r dist/$APP_NAME/* $DEPLOY_PATH/

echo "Fixing permissions..."
sudo chown -R www-data:www-data $DEPLOY_PATH

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Deployment complete."
