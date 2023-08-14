#!/bin/sh
set -ex

ls
pwd

pm2-runtime start npm --name "lgs-frontend" -- run start:live
