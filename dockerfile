# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install pnpm because it is used with this app
RUN npm i -g pnpm
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN pnpm i 
# Build the app
RUN pnpm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 4173
# Start the app
CMD [ "pnpm", "run", "preview", "--host"]
