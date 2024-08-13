# Glob Patterns

- It is a powerful and flexible way to define paths and select files and directories based on patterns
- Wildcards:
  - `*` matches any sequence of characters, including none
  - `?` matches a single character
  - `[]` matches any character inside the square brackets
- Examples of use:
  - `*.ex` only searches for files with `.ex` extension
  - `file?.ex` searches for files `file1.ex`, `file2.ex`, etc
  - `file[1-3].ex` searches only for files `file1.ex`, `file2.ex` and `file3.ex`
  - `data/*.csv` matches all `.csv` files within the `data` directory
  - `lib/**` searches only within the `lib` folder
  - `data/**/*_backup?.zip` matches all `.zip` files whose name ends with `_backup` followed by a single character, within any subdirectory of the `data` folder
  - `!*.json` excludes all files with `.json` extension
  - `dir1/** dir2/**` searches for multiple directories simultaneously (just separate with spaces)
