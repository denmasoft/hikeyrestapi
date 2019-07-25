# GitHub-dependency Stability REST API

General description
---
This project use clean arquitecture and apply 
some patterns such as:
- Repository
- Dependency Injection

Project Structure
---
- Components
	-  Express handlers (Factories, Middlewares and routes)
- Controllers
	- Converts the request data into a model and passes it to the use case.
- Models
	- Domain model objects such as Entities
- Remote_models
	- Github related models and schemas
- Repositories
	- Data access objects interfaces (It would be better using Typescript)
- Repositories_interfaces
	- Repository implementations (No interface pattern in JS)
- Services
	- Third-parties REST API Access in this case Github.
- Routes
	- All routes are imported here.
- use_cases
	- Application business rules 		

Prerequisites
---
- Node.js
- npm

Instructions
---
1. Clone project: 
	git clone https://github.com/yalint/gateways-backend.git
2. cd gateways-backend
3. npm install
4. npm start 
5. Install and open Postman, import json file "GitHub-dependency Stability REST Api.postman_collection.json" which is in the root directory of the project
6. demo https://hikeyrestapi.herokuapp.com
Automated Build
---
Deploy to heroku from github.