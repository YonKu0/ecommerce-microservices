# 1) Build stage
FROM golang:1.24.2-alpine AS builder
WORKDIR /src

# Cache deps
COPY go.mod go.sum ./
RUN go mod download

# Build binary
COPY . .
RUN go build -o checkout

# 2) Runtime stage
FROM alpine:3.18
WORKDIR /app

# Copy in the built binary
COPY --from=builder /src/checkout .

# Expose your HTTP port
EXPOSE 8080

# Launch the service
CMD ["./checkout"]
