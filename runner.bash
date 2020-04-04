#!/bin/bash

sudo gitlab-runner register -n \
  --url http://10.1.1.89 \
  --registration-token 55Hx6DzL_SLvxqJtNX8g \
  --executor docker \
  --description "Docker Runner" \
  --docker-image "ruby:2.5" \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock
