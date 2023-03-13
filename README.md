
![image](https://user-images.githubusercontent.com/116376239/206076481-f915447d-c120-47f6-a99e-3d6768b1295d.png)

# SPA React Template

This application is our base model for a SPA project

## ⚙ Technologies & Tools
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![](https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)

<br>

## 📡 Installation

**Step One:** Install the 18 version of [Node.js](https://nodejs.org/en/)

**Step Two:** Git Clone Project 
```sh
git clone https://github.com/NetworkmeIO/code-project-templates.git
```

**Step Three:** Git Checkout SPA React Template 
```sh
git checkout spa-react-template
```

**Step Four:** Change Git Remote Origin 
```sh
git remote set-url origin https://git-repo/new-repository.git
```
<br>

## 🛠 Getting Started

**Step One:** Create the branch dev
```sh
git checkout -b dev
```

**Step Two:** Create new branch from dev
```sh
git branch feature/new-branch-name dev
git checkout feature/new-branch-name
```

**Step Three:** Change the current dir to ./service
```sh
cd ./service
```

**Step Four:** Install dependencies
```sh
npm install
```

**Step Five:** Start Development and enjoy coding 😁 
```sh
npm start
```
<br>

## 📐 Solution Architecture

### [Security Layer](./service)

This layer is responsible for managing application authentication, main routing, and other related matters, such as cache handling.

### [Interface Layer](./docs)

In this layer we will find all interface elements, grouped by modules independently, followed by their subroutes.

### [Business Layer](./.github)

The business layer, as the name implies, is the layer responsible for containing all the application's business rules. In addition to being the states management center.

### [Comunication Layer](./scripts)

This layer is responsible for external communication to the application, and it is where the contracts (models) will be found.

![image](https://user-images.githubusercontent.com/116376239/221461833-54400d6d-12a8-4f16-8764-d0e2077a8f05.png)

<br>

## 🕹 Scripts Available

### `npm start`
Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will automatically reload if you make changes to the code.<br>
```sh
npm start
```
<br/>

### `npm build`
Build the application into javascript file chuncks<br>
The result will be in [./.scripts/build](./.scripts/build) path <br>
The complement after ":" matches the desired environment 
```sh
npm build
```
<br/>

### `npm run server`
Starts a mock server, the mock data is located in the root of the project inside the db.json file
```sh
npm run server || json-server --watch db.json
```
<br/>

## 👨‍💻 Reference Developers
In case you need to support working on this project, feel free to reach out to one of the following developers


### <img src="https://user-images.githubusercontent.com/116376239/210360195-5853a87b-1f1a-421e-8429-6d19905502a2.jpg" width="70px" height="70px" style="border-radius: 5px;float: left; margin-right: 16px" /> [Lucas Schoemberger Sales](https://www.linkedin.com/in/lucas-schoemberger-sales/)

[Tech Lead](https://github.com/lschoemb)

### <img src="https://github.com/gabrielprestesperini.png" width="70px" height="70px" style="border-radius: 5px;float: left; margin-right: 16px" /> [Gabriel Prestes Perini](https://github.com/gabrielprestesperini)

[Front end Developer](https://github.com/gabrielprestesperini)
