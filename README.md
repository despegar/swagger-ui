# Depegar's swagger UI

#Sync
How to sync with original project: https://help.github.com/articles/syncing-a-fork/

##Link broken

###Setup remote
1. `git remote -v`

   # origin  https://github.com/despegar/swagger-ui.git (fetch)
   # origin  https://github.com/despegar/swagger-ui.git (push)
2. `git remote add upstream https://github.com/swagger-api/swagger-ui.git`

###Update upstream
1. `git fetch upstream`
2. `git checkout master`
3. `git merge upstream/master`

