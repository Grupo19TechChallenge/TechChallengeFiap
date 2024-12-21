#!/usr/bin/env bash
set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" 5432; do
  echo "Waiting for database at $host:5432..."
  sleep 1
done

>&2 echo "Database is up - executing command"
exec $cmd
