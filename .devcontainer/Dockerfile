FROM denoland/deno:2.1.5
WORKDIR /app

RUN  \
  apt-get update &&  \
  apt-get install -y --no-install-recommends  \
  git  \
  &&  \
  apt-get clean &&  \
  rm -rf /var/lib/apt/lists/*
