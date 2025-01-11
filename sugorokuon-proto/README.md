# Generating types

- Use [Buf CLI](https://buf.build/docs/tutorials/getting-started-with-buf-cli/) to generate code defining types
- It runs with the following commands

```
$ buf build
$ buf generate
```

# Format

```
$ buf format --write
```

- It formats by following the rule in buf.yaml

```
lint:
  use:
    - DEFAULT
```
