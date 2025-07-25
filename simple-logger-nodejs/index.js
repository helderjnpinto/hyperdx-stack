// index.js
const { initSDK } = require("@hyperdx/node-opentelemetry");
const HyperDX = require("@hyperdx/node-opentelemetry");

// initialize the SDK (captures console.*, traces, metrics, exceptions)
initSDK({
  consoleCapture: true, // enable console.* capture
  detectResources: true, // detect resources automatically
  disableTracing: false, // enable tracing
  service: process.env.OTEL_SERVICE_NAME || "simple-node-logger",
  apiKey: process.env.HYPERDX_API_KEY,
  // otlpEndpoint:
  //   process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "http://otel-collector:4318", <- just set the env there is not property
  stopOnTerminationSignals: true, // stop the SDK on termination signals;
});

console.log("👋 Hello, ClickStack! This log will be exported.");

// // emit another log shortly before exiting
// setTimeout(() => {
//   // By default, console.* calls are auto‑captured—no extra transports needed
//   console.log("✅ Final log before shutdown");
//   // give the SDK a moment to flush
//   setTimeout(() => process.exit(0), 500);
// }, 1000);

for (let i = 0; i < 100; i++) {
  // emit some logs
  console.log(`Log number ${i + 1}`);
  console.debug(`Log number ${i + 1}`);
  console.info(`Log number ${i + 1}`);
  console.warn(`Log number ${i + 1}`);
  console.error(`Log number ${i + 1}`);
  if (i == 20) {
    HyperDX.recordException(
      new Error("-> This is an error log at log number 21")
    );
    // emit an error log
    console.error("This is an error log at log number 21");
    process.exit(0);
  }
}

console.log(
  "Check the logs here " +
    process.env.HYPERDX_APP +
    "/services?service=" +
    process.env.OTEL_SERVICE_NAME
);
