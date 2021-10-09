@echo off

:home
SET var=0
cls
title Proyect Manager 1.1.0
echo Hi %USERNAME%, welcome to Proyect Manager tool!
echo ------------------------------------------------------------------------------
echo  %DATE% ^| %TIME%
echo ------------------------------------------------------------------------------
echo  1    Install yarn in your project
echo  2    Install common node_modules
echo  3    Compile contracts
echo  4    Migrate contracts
echo  5    Run UI interface on localhost
echo  6    Create GitHub directory
echo  7    Start Git Bash x64
echo  8    Start Git Bash x86
echo  9    Exit
echo ------------------------------------------------------------------------------
echo.
SET /p var= ^> Choose an option [1-9]:
if "%var%"=="1" goto global
if "%var%"=="2" goto packages
if "%var%"=="3" goto tcompile
if "%var%"=="4" goto tmigrate
if "%var%"=="5" goto ui
if "%var%"=="6" goto gitdir
if "%var%"=="7" goto gitbash64
if "%var%"=="8" goto gitbash86
if "%var%"=="9" goto exitool

::error
echo. "%var%" is not a valid answer, please try again.
pause
cls
goto home

:global
cls
start yarn
goto home

:packages
cls
set /p respuesta=Do you want to install 115 packages in node_module folder?(Y/n):
if %respuesta%==y goto true
if %respuesta%==n goto false

::error2
echo. "%respuesta%" is not a valid answer, please try again.
pause
cls
goto packages

:false
cls
echo Installation canceled.
pause
goto home

:true
yarn add @binance-chain/bsc-connector & yarn add @ethersproject/experimental & yarn add @hcaptcha/react-hcaptcha & yarn add @headlessui/react & yarn add @heroicons/react & yarn add @onflow/fcl & yarn add @onflow/types & yarn add @onflow/util-encode-key & yarn add @pancakeswap/sdk & yarn add @pancakeswap/uikit & yarn add @prisma/client & yarn add @reduxjs/toolkit & yarn add @tailwindcss/forms & yarn add @theme-ui/match-media & yarn add @typeform/embed-react & yarn add @types/bytebuffer & yarn add @types/cron & yarn add @types/dotenv-safe & yarn add @types/elliptic & yarn add @types/express & yarn add @types/fs-extra & yarn add @types/multicodec & yarn add @types/node & yarn add @types/qs & yarn add @types/react & yarn add @types/react-dom & yarn add @types/react-router-dom & yarn add @types/react-window & yarn add @types/styled-components & yarn add @uniswap/token-lists  & yarn add @uniswap/v -core & yarn add @uniswap/v -periphery & yarn add @uns/crypto & yarn add @uns/ts-sdk & yarn add @web -react/core & yarn add @web -react/injected-connector & yarn add @web -react/walletconnect-connector & yarn add ajv & yarn add autoprefixer & yarn add bignumber js & yarn add canvas-confetti & yarn add cids & yarn add clipboard-copy & yarn add cron & yarn add date-fns & yarn add dotenv-safe & yarn add easymde & yarn add elliptic & yarn add eslint-config-next & yarn add ethers & yarn add express & yarn add formik & yarn add fs-extra & yarn add fuse js & yarn add graphql & yarn add graphql-request & yarn add gray-matter & yarn add hcaptcha & yarn add js-cookie & yarn add lightweight-charts & yarn add lodash & yarn add mixpanel-browser & yarn add multicodec & yarn add multihashes & yarn add next & yarn add node-fetch & yarn add numeral & yarn add postcss & yarn add prisma & yarn add qs & yarn add react & yarn add react-aria & yarn add react-countup & yarn add react-datepicker & yarn add react-dom & yarn add react-feather & yarn add react-helmet-async & yarn add react-markdown & yarn add react-redux & yarn add react-router-dom & yarn add react-scripts & yarn add react-transition-group & yarn add react-window & yarn add recharts & yarn add redux-localstorage-simple & yarn add remark & yarn add remark-gfm & yarn add remark-html & yarn add sha & yarn add split-grid & yarn add styled-components & yarn add swiper & yarn add swr & yarn add theme-ui & yarn add typescript & yarn add yup & yarn add @commitlint/cli & yarn add @commitlint/config-conventional & yarn add @pancakeswap/eslint-config-pancake & yarn add @types/canvas-confetti & yarn add @types/jest & yarn add @types/react-datepicker & yarn add @types/react-redux & yarn add @types/react-transition-group & yarn add @types/simplemde & yarn add cypress & yarn add eslint & yarn add eslint-plugin-cypress & yarn add husky & yarn add prettier & yarn add serve & yarn add source-map-explorer & yarn add start-server-and-test & yarn add ts-node & pause

:tcompile
cls
start truffle compile
goto home

:tmigrate
cls
start truffle migrate
goto home

:gitdir
cls
echo Creating GitHub directory...
git init
echo GitHub created.
pause
goto home

:gitbash64
cls
start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login
goto home

:gitbash86
cls
start "" "%SYSTEMDRIVE%\Program Files (x86)\Git\bin\sh.exe" --login
goto home

:ui
cls
start yarn start
goto home

:exitool
exit