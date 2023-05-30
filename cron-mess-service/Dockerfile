# Install dependencies only when needed
FROM node:17-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app/cron-mess
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:17-alpine AS builder
WORKDIR /app/cron-mess
COPY --from=deps /app/cron-mess/node_modules ./node_modules
COPY --from=deps /app/cron-mess/package.json .
COPY --from=deps /app/cron-mess/yarn.lock .
COPY . .

EXPOSE 4000

ENTRYPOINT [ "node", "index.js" ]