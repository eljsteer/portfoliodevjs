@echo off

rem Compile theme.scss
call sass src/styles/Sass/theme.scss src/styles/theme.css --style compressed

rem Compile projectbutton.scss
call sass src/styles/Sass/projectbutton.scss src/styles/projectbutton.css --style compressed

rem Compile footer.scss
call sass src/styles/Sass/footer.scss src/styles/footer.css --style compressed

rem Compile header.scss
call sass src/styles/Sass/header.scss src/styles/header.css --style compressed
