https://pechkinby.github.io/Raven/

# RAVEN
## Project structure
![Project structure](https://user-images.githubusercontent.com/33311087/110444650-56094b00-80ce-11eb-8c39-4e678d715224.png)


The file structure is consists of two folders: src and dist.

The source files are located in "src" - source folder.

The final version of the project is generated in folder "dist" which was made by Gulp.

"node modules" includes node.js packages.

gulpfile.js - the configuration file for Gulp.

package.json - the file where the node.js package dependencies are described.

package-lock.json - the packages and their versions for installation.

## Built with
* [Git](https://git-scm.com/) - Git is the basic version control system for this project
* [Gulp](https://gulpjs.com/) - Used to build the project (generates svgSprites, optimizes images, monitors file updates, synchronizes work in studio and browser, etc)
* [SASS / SCSS](https://sass-lang.com/) - features are used to display content: flex/grid approach, relative/absolute position consept
* [BEM](https://en.bem.info/methodology/) - The CSS methodology used 

## What you need to start project
* [Node.js](https://nodejs.org/en/) - software platform required to work with npm
* [NPM](https://www.npmjs.com/) - Dependency Management

## Installing
Downloading this repository 
```
git clone https://github.com/PechkinBY/Raven
cd Raven
```
<br/>Setting up environment 
```
npm i
```
<br/>Starting gulp
```
gulp
```
<br/>Building project
```
gulp build
```
