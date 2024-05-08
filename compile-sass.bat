@echo off

rem Compile theme.scss
sass src/styles/theme.scss src/styles/theme.css --style compressed

rem Compile other components
sass src/styles/projectbutton.scss src/styles/projectbutton.css --style compressed
sass src/styles/footer.scss src/styles/footer.css --style compressed
sass src/styles/header.scss src/styles/header.css --style compressed
