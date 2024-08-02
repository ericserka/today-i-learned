# Storing Credentials

- An authentication option on github, in addition to via ssh, is via https. The command bellow is useful because it stores your github username and password so you don't need to re-enter them in the future.

```bash
git config --global credential.helper store
```

# Changing push default behaviour

- By default, git refuses to send a push if the remote branch name is different from the local branch name ("simple" mode). This makes it impossible to push a local branch when the remote branch does not yet exist. To work around this case, we set the mode to "current", which simply pushes the local branch to a remote branch of the same name.

```bash
git config --global push.default current
```
