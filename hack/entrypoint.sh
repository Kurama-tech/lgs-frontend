#!/bin/sh
set -ex


pm2-runtime start npm --name "lgs-frontend" -- start:production
