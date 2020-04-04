#!/bin/bash

sudo gitlab-runner register -n \
  --url http:ip-gitlab \
  --registration-token {token} \
  --executor docker \
  --description "Docker Runner" \
  --docker-image "ruby:2.5" \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock
