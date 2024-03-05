```shell
# 1. Create folder for your new project
mkdir my-project

# 2. Step in this folder
cd my-project

# 3. Initialize local git repository
git init

# You creating files, writing code...

# 4. Stage files (only stage files will be committed)
git add .

# 5. Make commit
git commit -m "your commit message"

# 6. (Optional if remote repo is not setup yet) At this stage you need to create remote repository and execute next commands to setup connection between local and remote repo

git remote add origin git@github.com:egor7orlov/test.git
git branch -M main
git push -u origin main

# If remote repo already set up, you'll usually execute these commands:

# 7. Pull from remote branch just in case some changes were made. Usually this happens when you work in team
git pull

# 8. Push your changes
git push
```