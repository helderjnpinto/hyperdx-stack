ALTER TABLE hyperdx_sessions MODIFY TTL Timestamp + INTERVAL 7 DAY;

ALTER TABLE otel_logs MODIFY TTL TimestampTime + INTERVAL 7 DAY;

ALTER TABLE otel_metrics_exponential_histogram MODIFY TTL StartTimeUnix + INTERVAL 7 DAY;

ALTER TABLE otel_metrics_gauge MODIFY TTL TimeUnix + INTERVAL 7 DAY;

ALTER TABLE otel_metrics_histogram MODIFY TTL StartTimeUnix + INTERVAL 7 DAY;

ALTER TABLE otel_metrics_sum MODIFY TTL StartTimeUnix + INTERVAL 7 DAY;

ALTER TABLE otel_metrics_summary MODIFY TTL StartTimeUnix + INTERVAL 7 DAY;

ALTER TABLE otel_traces MODIFY TTL Timestamp + INTERVAL 7 DAY;

ALTER TABLE otel_traces_trace_id_ts MODIFY TTL Start + INTERVAL 7 DAY;
