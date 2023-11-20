#!/usr/bin/env bash

set -xe

IMAGE='manuelraa/buf_grpc_test'
USER="$(id -u):$(id -g)"

# Build buf docker image
docker build --file Dockerfile-buf --tag "$IMAGE" './'

# Buf generate
docker run \
    --volume "$(pwd):/workspace" \
    --workdir /workspace/api \
    --user "$USER" \
    "$IMAGE" generate
