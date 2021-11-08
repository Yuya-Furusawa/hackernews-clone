FROM node:16-alpine as build
WORKDIR /build
COPY . .
RUN npm install react-scripts
RUN npm run build

FROM node:16-alpine as prd
WORKDIR /app
COPY --from=build /build/build ./build/
COPY --from=build /build/server.js .
RUN addgroup nodegroup \
    && adduser -D -G nodegroup nodeuser \
    && chown -R nodeuser:nodegroup /app
RUN npm install express
CMD ["node", "server.js"]