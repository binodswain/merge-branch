# Merge-Branch action

merge head branch into base branch on schedule event.

## Usage

### Create `.github/merge-branch.yml`

Create a .github/merge-branch.yml file with a schedule to execute the operation.

more: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events

**Basic example**

```yml
name: Merge-branch
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    # https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events
    - cron: "0 0-23 * * *"

jobs:
  merge:
    runs-on: ubuntu-latest

    steps:
      - uses: binodswain/merge-branch@master
        with:
          repo-token: "${{ secrets.GITHUB_TOKEN }}"
          base: "master"
          head: "develop"
```

### values required

| keys       | required | desc                     |
| ---------- | -------- | ------------------------ |
| base       | true     | base branch              |
| head       | true     | head branch with changes |
| repo-token | true     |                          |
