# Install dependencies only when needed
FROM node:17-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app/always-on
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:17-alpine AS builder
WORKDIR /app/always-on
COPY --from=deps /app/always-on/node_modules ./node_modules
COPY --from=deps /app/always-on/package.json .
COPY --from=deps /app/always-on/package-lock.json .
COPY . .

EXPOSE 8080

CMD ["node index.js"]