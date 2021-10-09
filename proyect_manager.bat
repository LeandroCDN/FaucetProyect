@echo off

:home
SET var=0
cls
title Proyect Manager 1.1.0
echo Hi %USERNAME%, welcome to Proyect Manager tool!
echo ------------------------------------------------------------------------------
echo  %DATE% ^| %TIME%
echo ------------------------------------------------------------------------------
echo  1    Create base project
echo  2    Manage a project
echo ------------------------------------------------------------------------------
echo.
SET /p var= ^> Choose an option [1-2]:
if "%var%"=="1" goto create
if "%var%"=="2" goto manage

::error
echo. "%var%" is not a valid answer, please try again.
pause
cls
goto home



















:create
SET var=0
cls
title Proyect Manager 1.1.0
echo Hi %USERNAME%, welcome to Proyect Manager tool!
echo ------------------------------------------------------------------------------
echo  %DATE% ^| %TIME%
echo ------------------------------------------------------------------------------
echo                      REACT
echo ------------------------------------------------------------------------------
echo  1    Yarn + Npm + Base + TypeScript + React
echo  2    Yarn + Npm + Base + JavaScript + React
echo ------------------------------------------------------------------------------
echo                       VUE
echo ------------------------------------------------------------------------------
echo  3    Yarn + Npm + Base + TypeScript + Vue
echo  4    Yarn + Npm + Base + JavaScript + Vue
echo ------------------------------------------------------------------------------
echo                      ANGULAR
echo ------------------------------------------------------------------------------
echo  5    Yarn + Npm + Base + TypeScript + Angular
echo  6    Yarn + Npm + Base + JavaScript + Angular
echo ------------------------------------------------------------------------------
echo                OFFICIAL TRUFFLE BOXES
echo ------------------------------------------------------------------------------
echo  7    Yarn + Npm + Base + JavaScript + React
echo  8    Yarn + Npm + Base + JavaScript + React
echo  9    Yarn + Npm + Base + JavaScript + React
echo  10   Yarn + Npm + Base + JavaScript + React
echo  11   Yarn + Npm + Base + JavaScript + React
echo ------------------------------------------------------------------------------
echo.
SET /p var= ^> Choose an option [1-11]:
if "%var%"=="1" goto tr
if "%var%"=="2" goto jr
if "%var%"=="3" goto tv
if "%var%"=="4" goto jv
if "%var%"=="5" goto ta
if "%var%"=="6" goto ja
if "%var%"=="7" goto trt
if "%var%"=="8" goto manage
if "%var%"=="9" goto btr
if "%var%"=="10" goto manage
if "%var%"=="11" goto btr
if "%var%"=="12" goto manage
if "%var%"=="13" goto btr
if "%var%"=="14" goto manage
if "%var%"=="15" goto btr
if "%var%"=="16" goto manage
if "%var%"=="17" goto btr
if "%var%"=="18" goto manage
if "%var%"=="19" goto btr
if "%var%"=="20" goto manage

::error
echo. "%var%" is not a valid answer, please try again.
pause
cls
goto create

:tr
cls
echo Creating base project...
yarn init && npm i webpack webpack-cli –D

:trt 
cls
echo Creating LibertyLocked/truffle-react-ts-template...
truffle unbox LibertyLocked/truffle-react-ts-template
echo Successfully created!
pause
cd truffle-react-ts-template
cls
goto manage

:d 
cls
echo Creating drizzle...
truffle unbox drizzle
echo Successfully created!
pause
cd drizzle
cls
goto manage

:o 
cls
echo Creating optimism...
truffle unbox optimism
echo Successfully created!
pause
cd optimism
cls
goto manage

:r 
cls
echo Creating LibertyLocked/react...
truffle unbox react
echo Successfully created!
pause
cd react
cls
goto manage

:a
cls
echo Creating LibertyLocked/arbitrum...
truffle unbox arbitrum
echo Successfully created!
pause
cd arbitrum
cls
goto manage

:v
cls
echo Creating drizzle-vue-box...
truffle unbox drizzle-vue-box
echo Successfully created!
pause
cd drizzle-vue-box
cls
goto manage
















:manage
SET var=0
cls
title Proyect Manager 1.1.0
echo Hi %USERNAME%, welcome to Proyect Manager tool!
echo ------------------------------------------------------------------------------
echo  %DATE% ^| %TIME%
echo ------------------------------------------------------------------------------
echo  1    Open Visual Studio Code in this folder
echo  2    Install yarn in your project
echo  3    Install react-scripts
echo  4    Repair yarn
echo  5    Compile contracts
echo  6    Migrate contracts
echo  7    Run UI on localhost
echo  8    Create GitHub directory
echo  9    Start Git Bash x64
echo  10    Start Git Bash x86
echo  11    Exit
echo ------------------------------------------------------------------------------
echo.
SET /p var= ^> Choose an option [1-11]:
if "%var%"=="1" goto code
if "%var%"=="2" goto global
if "%var%"=="3" goto packages
if "%var%"=="4" goto repair
if "%var%"=="5" goto tcompile
if "%var%"=="6" goto tmigrate
if "%var%"=="7" goto ui
if "%var%"=="8" goto gitdir
if "%var%"=="9" goto gitbash64
if "%var%"=="10" goto gitbash86
if "%var%"=="11" goto exitool

::error
echo. "%var%" is not a valid answer, please try again.
pause
cls
goto manage

:code
start code .
goto manage

:global
start yarn
goto manage

:packages
start yarn add react-scripts
goto manage

:repair
cls
yarn audit & pause & yarn add --package-lock-only & pause & yarn audit fix & pause & yarn import & pause & goto manage

:tcompile
start truffle compile
goto manage

:tmigrate
start truffle migrate
goto manage

:gitdir
cls
echo Creating GitHub directory...
git init
echo GitHub created.
pause
goto manage

:gitbash64
start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login
goto manage

:gitbash86
start "" "%SYSTEMDRIVE%\Program Files (x86)\Git\bin\sh.exe" --login
goto manage

:ui
start yarn start
goto manage

:exitool
cls
pause
exit