# QUEEN-SITHU-MD_V1
A simple whatsapp bot Srilanka
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
## <p align="center">
  <a href="https://github.com/THARU44/QUEEN-SITHU-MD"><img src="https://files.catbox.moe/m3mw1u.jpg" width="700" alt="Profile"/> </a>
</p>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>




 <b>GET SESSION ID VIA PAIR CODE 01</b>



<a href='https://pair-code-production.up.railway.app/' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/Click here to get your session id-blue?style=for-the-badge&logo=opencv&logoColor=white'/></a>








<b>COPY WORKFLOW CODE</b></br>
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```






