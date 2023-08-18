#!/bin/sh
set -ex

#nginx
git pull origin containerize

docker compose down && docker compose pull &&  docker compose up -d 