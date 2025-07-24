# HyperDX with External Databases

This document provides instructions on how to run HyperDX with external ClickHouse and MongoDB databases using Docker Compose.

## Prerequisites

- Docker is installed and running on your machine.
- You have an accessible ClickHouse instance.
- You have an accessible MongoDB instance.

## Setup

1.  **Configure the environment variables:**

    Create a `.env` file in the same directory as the `docker-compose.yaml` file and fill in the following variables:

    ```
    # ClickHouse
    CLICKHOUSE_HOST=your_clickhouse_host
    CLICKHOUSE_TCP_PORT=9000
    CLICKHOUSE_USER=default
    CLICKHOUSE_PASSWORD=
    CLICKHOUSE_DATABASE=default

    # MongoDB
    MONGO_URI=mongodb://user:password@host:port/hyperdx

    # Generate a secure key for API authentication
    HYPERDX_API_KEY=your_secret_api_key
    ```

    Replace the placeholder values with your actual database credentials. For `HYPERDX_API_KEY`, you can generate a secure random string.

2.  **Start the services:**

    Run the following command to start the HyperDX services in detached mode:

    ```sh
    docker-compose up -d
    ```

## Services

The `docker-compose.yaml` file defines the following services:

- `hyperdx-server`: The main backend server for HyperDX.
- `hyperdx-otel-collector`: The OpenTelemetry collector that receives and processes telemetry data.
- `hyperdx-app`: The frontend application for HyperDX.

### Gen CLI

```sh
go install github.com/open-telemetry/opentelemetry-collector-contrib/cmd/telemetrygen@latest

telemetrygen logs \
    --otlp-insecure \
    --otlp-http \
    --otlp-endpoint=otel-collector:4318 \
    --duration=5s \
    --rate=10 \
    --otlp-header 'Authorization="77...9bd7"' \
    --service="demo-go-telemetry"
```
