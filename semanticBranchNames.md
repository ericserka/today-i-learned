# Semantic Names for Branch

Branch name pattern for a more organized repository.

Format: `<type>/#<issueNumber>-<alias>`

## Example

```
feat/#1-init
^------^   ^---^
|          |
|          +---> issue keyword
|
+-------> Type: feat, chore, docs, fix, refactor, style or test.
```

Type can be:

- `feat`: new feature for the user, not a new feature for the code;

- `fix`: bug fix for user, not code bug fix;

- `docs`: documentation changes;

- `style`: code formatting, adding semicolon, etc; no changes in production;

- `refactor`: production code refactoring; for example rename a variable or function;

- `test`: adding new tests, refactoring existing tests; no changes in production;

- `chore`: updating grunt tasks etc (disabling support for Node 6 for example); no production code change.
