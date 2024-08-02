# Working on different branches Git/Github GitFlow

1. First of all, `git pull` in the develop branch:

```bash
git checkout develop # Go to develop branch
git pull
```

2. Create new branch based on develop:

```bash
git branch    # Check if it's on develop
git checkout -b feat/xyz # Create a new branch called 'feat/xyz' and checkout

# Just out of curiosity, 'git branch -av' lists the remote and local branches
```

3. In the new branch, change what you need.

4. Commit changes and push:

```bash
git add .
git commit -m "Your message"
git push --set-upstream origin feat/xyz
```

5. Merge the new branch into develop and `git pull` to fetch and download content from the remote repository and update the local repository to match that content:

```bash
git checkout develop
git merge feat/xyz
git pull
```

6. Delete the branch you created:

```bash
git branch -d feat/xyz # Remove the branch locally
git push origin --delete feat/xyz # Remove the branch remotely
```

7. Give final push in develop:

```bash
git add .
git commit -m "Your message"
git push
```

Note: When several people work on the same repository, the `git merge` is usually not done directly as demonstrated here. The common thing is to open a pull request, request a review from another contributor and only then do the merge (if the contributor accepts your pull request).
