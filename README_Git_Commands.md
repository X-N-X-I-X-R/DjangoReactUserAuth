
# Git Commands Guide

This guide provides a list of common Git commands along with brief explanations for each.

## Creating a New Branch:
1. `git branch branch_name`  
   - Creates a new branch named `branch_name`, but does not switch to it.
2. `git checkout branch_name`  
   - Switches to the specified branch.
3. `git checkout -b branch_name`  
   - Creates a new branch named `branch_name` and switches to it.

## Working on a Branch:
4. `git add .`  
   - Stages all changes in the current directory for the next commit.
5. `git commit -m "commit message"`  
   - Commits the staged changes with a descriptive message.
6. `git push origin branch_name`  
   - Pushes the commits from your local branch to the remote repository.

## Switching Branches:
7. `git checkout another_branch`  
   - Switches to another existing branch.
8. `git switch another_branch`  
   - A newer way to switch to another branch (Git version 2.23 and above).

## Updating Branch from Remote:
9. `git pull`  
   - Updates your current branch with the latest changes from the remote server.

## Merging Branches:
10. `git merge branch_name`  
    - Merges changes from the specified branch into the current branch.

## Managing Branches:
11. `git branch`  
    - Lists all branches in your local repository.
12. `git branch -d branch_name`  
    - Deletes the specified branch (only if it has been merged).

## Amending and Updating a Commit:
13. `git commit --amend`  
    - Allows you to modify the last commit (e.g., change message or add more changes).

## Help and Additional Information:
14. `git status`  
    - Provides information on the current status of the repository, including uncommitted changes and branch status.


# delete
git branch -d feature-branch  # Or git branch -D feature-branch if needed
