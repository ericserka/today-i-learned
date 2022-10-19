# Semantic commit messages

Commit pattern for a more organized repository.

Format: `<type>: <subject>`

## Example

```
feat: navbar
^--^  ^------------^
|     |
|     +-> Summary of what was done.
|
+-------> Type: chore, docs, feat, fix, refactor, style or test.
```

Type can be:

- `feat`: new feature for the user, not a new feature for the code;

- `fix`: bug fix for user, not code bug fix;

- `docs`: documentation changes;

- `style`: code formatting, adding semicolon, etc; no changes in production;

- `refactor`: production code refactoring; for example rename a variable or function;

- `test`: adding new tests, refactoring existing tests; no changes in production;

- `chore`: updating grunt tasks etc (disabling support for Node 6 for example); no production code change.
