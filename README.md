# CSCI 32 - Fall 2021 #

### What is this repository for? ###

* Class Lecture Files
* Class Exercise Files
* Class Lab Files

### How do I use this repository? ###

+ The main branch has this README.
+ To list available branches to checkout run the following
    *  cd ~/workspace
    *  git branch -a
+ To checkout a particular branch run the following:
    *  git checkout BRANCHNAME
+ To get back to the main branch:
    *  cd ~/workspace
    *  git checkout main


### How to get new files into the repository if you already have created it ###

* Open up your terminal
+ Run the following commands in the terminal:
    * cd ~/workspace
    * git fetch class
    * git checkout main (or whatever branch you want to checkout)
- Your repository should now be up to date

### How to setup your repository to get new files from me ###
* Open up your terminal
+ Run the following commands in the terminal:
    * cd ~/workspace
    * git remote add class https://github.com/WD2fa21/wd2fa21.git