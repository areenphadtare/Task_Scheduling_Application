
<a href="https://github.com/areenphadtare/TODO-Flask">
<img src="https://img.shields.io/github/stars/areenphadtare/TODO-Flask?style=for-the-badge&logo=github" alt="GitHub Stars">
</a>

<a href="https://github.com/areenphadtare/TODO-Flask/forks">
<img src="https://img.shields.io/github/forks/areenphadtare/TODO-Flask?style=for-the-badge&logo=github" alt="GitHub Forks">
</a>

<a href="https://github.com/areenphadtare/TODO-Flask/issues">
<img src="https://img.shields.io/github/issues/areenphadtare/TODO-Flask?style=for-the-badge&logo=github" alt="GitHub Issues">
</a>

<a href="https://github.com/areenphadtare/TODO-Flask/commits">
<img src="https://img.shields.io/github/last-commit/areenphadtare/TODO-Flask?style=for-the-badge&logo=github" alt="Last Commit">
</a>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:00C9FF,50:0072FF,100:7F00FF&text=TODO%20Application&fontSize=42&fontColor=ffffff&animation=fadeIn" alt="TODO Application">

</div>

---

# 📖 About the Project

**Flask TODO Application** is a task-management web application developed using **Python and Flask**.

The project demonstrates the fundamentals of backend web development, including Flask routing, HTTP requests, Jinja2 templates, CRUD operations, and database integration.

The application provides a simple interface for managing daily tasks.

---

# ✨ Features

* ✅ Create new tasks
* 📋 View existing tasks
* ✏️ Update tasks
* 🗑️ Delete tasks
* ✔️ Mark tasks as completed
* 💾 Persistent database storage
* 🌐 Web-based interface
* 🎨 Simple user interface
* 🔄 Full CRUD functionality

---

# 🏗️ Application Architecture

```text
                    ┌─────────────────┐
                    │      USER       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  HTML + CSS UI  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │      FLASK      │
                    │     ROUTES      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ APPLICATION     │
                    │     LOGIC       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     SQLite      │
                    │    DATABASE     │
                    └─────────────────┘
```

---

# 🔄 CRUD Operations

This project demonstrates the four fundamental database operations:

| Operation | Function                  |
| --------- | ------------------------- |
| 🟢 Create | Add a new task            |
| 🔵 Read   | Display tasks             |
| 🟡 Update | Modify or complete a task |
| 🔴 Delete | Remove a task             |

```text
CREATE
  │
  ▼
Add Task
  │
  ▼
READ ──────────► View Tasks
  │
  ▼
UPDATE ────────► Edit / Complete
  │
  ▼
DELETE ────────► Remove Task
```

---

# 🛠️ Tech Stack

| Technology | Purpose                |
| ---------- | ---------------------- |
| 🐍 Python  | Backend programming    |
| 🌶️ Flask  | Web framework          |
| 🗄️ SQLite | Database               |
| 🌐 HTML5   | Frontend structure     |
| 🎨 CSS3    | Styling                |
| 🧩 Jinja2  | Template rendering     |
| 🔧 Git     | Version control        |
| 🐙 GitHub  | Source-code management |

---

# 📂 Project Structure

```text
TODO-Flask/
│
├── app.py
│
├── templates/
│   ├── index.html
│   ├── add.html
│   └── update.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│
├── database/
│   └── todo.db
│
├── requirements.txt
├── .gitignore
└── README.md
```

> Adjust this structure if your actual repository uses different filenames or folders.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/areenphadtare/TODO-Flask.git
```

```bash
cd TODO-Flask
```

## 2. Create a Virtual Environment

### Windows

```bash
python -m venv venv
```

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

If you do not have a `requirements.txt` file:

```bash
pip install Flask
```

## 4. Run the Application

```bash
python app.py
```

Then open:

```text
http://127.0.0.1:5000
```

---

# 📦 Requirements

Example:

```text
Flask
```

You can generate your dependency file using:

```bash
pip freeze > requirements.txt
```

---

# 🧠 Flask Concepts Demonstrated

### Flask Fundamentals

* Flask application creation
* Routing
* HTTP methods
* Request handling
* URL parameters
* Redirects
* `render_template()`
* `request`
* `redirect()`
* `url_for()`

### Jinja2

* Dynamic template rendering
* Variables
* Loops
* Conditional statements
* Template inheritance

### Database

* SQLite
* SQL queries
* CRUD operations
* Database connections
* Persistent storage

---

# 🌐 Application Routes

| Route            | Method     | Purpose         |
| ---------------- | ---------- | --------------- |
| `/`              | GET        | Display tasks   |
| `/add`           | GET / POST | Add a task      |
| `/update/<id>`   | GET / POST | Update a task   |
| `/delete/<id>`   | GET / POST | Delete a task   |
| `/complete/<id>` | GET / POST | Complete a task |

> Change these routes to match your actual Flask application.

---

# 📸 Screenshots

If you have screenshots, store them inside:

```text
screenshots/
├── home.png
├── add-task.png
└── update-task.png
```

Then display them using:

```markdown
![Home Page](screenshots/home.png)

![Add Task](screenshots/add-task.png)

![Update Task](screenshots/update-task.png)
```

These are **local repository links**, so they don't depend on an external image-hosting service.

---

# 📊 Development Progress

```text
Flask Fundamentals       ████████████████████ 100%

Routing                  ████████████████████ 100%

Jinja Templates          ██████████████████░░  90%

CRUD Operations          ██████████████████░░  90%

SQLite                   ████████████████░░░░  80%

Authentication           ██████████░░░░░░░░░░  50%

REST API                 ████████░░░░░░░░░░░░  40%

Deployment               █████░░░░░░░░░░░░░░░  25%
```

---

# 📈 GitHub Statistics

> These cards are dynamic. They update based on your GitHub activity.

<p align="center">

<img height="170"
src="https://github-readme-stats.vercel.app/api?username=areenphadtare&show_icons=true&theme=tokyonight&hide_border=true"
alt="GitHub Statistics">

<img height="170"
src="https://streak-stats.demolab.com?user=areenphadtare&theme=tokyonight&hide_border=true"
alt="GitHub Streak">

</p>

<p align="center">

<img height="170"
src="https://github-readme-stats.vercel.app/api/top-langs/?username=areenphadtare&layout=compact&theme=tokyonight&hide_border=true"
alt="Top Languages">

</p>

---

# 🏆 GitHub Trophies

<p align="center">

<img src="https://github-profile-trophy.vercel.app/?username=areenphadtare&theme=tokyonight&column=7&margin-w=10&margin-h=10"
alt="GitHub Trophies">

</p>

---

# 🔮 Future Improvements

### 🔐 Authentication

* [ ] User registration
* [ ] Login / Logout
* [ ] Password hashing
* [ ] User-specific tasks
* [ ] Session management

### ⚙️ Backend

* [ ] Flask Blueprints
* [ ] Flask-SQLAlchemy
* [ ] REST API
* [ ] API authentication
* [ ] Error handling
* [ ] Logging

### 🗄️ Database

* [ ] PostgreSQL
* [ ] SQLAlchemy ORM
* [ ] Database migrations

### 🎨 Frontend

* [ ] Bootstrap
* [ ] Responsive dashboard
* [ ] Dark mode
* [ ] Task filtering
* [ ] Search
* [ ] Task priorities
* [ ] Due dates

### 🚀 Deployment

* [ ] Docker
* [ ] Gunicorn
* [ ] CI/CD
* [ ] Environment variables
* [ ] Cloud deployment

---

# 🎯 Learning Objectives

Through this project, I am practicing:

* Building web applications with Flask
* Understanding client-server architecture
* Implementing CRUD operations
* Connecting Python applications with databases
* Working with Jinja2 templates
* Handling HTTP requests
* Structuring Python projects
* Managing dependencies
* Using Git and GitHub

---

# 🚀 Project Evolution

```text
Flask TODO
     │
     ▼
CRUD Application
     │
     ▼
User Authentication
     │
     ▼
REST API
     │
     ▼
PostgreSQL
     │
     ▼
React Frontend
     │
     ▼
Docker
     │
     ▼
Cloud Deployment
     │
     ▼
Production Task Manager 🚀
```

---

# 🔗 Repository

<p align="center">

<a href="https://github.com/areenphadtare/TODO-Flask">
<img src="https://img.shields.io/badge/View%20Repository-GitHub-181717?style=for-the-badge&logo=github" alt="View Repository">
</a>

<a href="https://github.com/areenphadtare/TODO-Flask/issues">
<img src="https://img.shields.io/badge/Report%20Issue-GitHub-red?style=for-the-badge&logo=github" alt="Report Issue">
</a>

</p>

---

# 🤝 Connect With Me

<p align="center">

<a href="https://github.com/areenphadtare">
<img src="https://img.shields.io/badge/GitHub-areenphadtare-181717?style=for-the-badge&logo=github" alt="GitHub">
</a>

<a href="https://www.linkedin.com/in/areen-phadtare-a26a66321/">
<img src="https://img.shields.io/badge/LinkedIn-Areen%20Phadtare-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
</a>

</p>

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a star!

<a href="https://github.com/areenphadtare/TODO-Flask">

<img src="https://readme-typing-svg.demolab.com/?font=Poppins&size=22&pause=1000&color=00C9FF&center=true&vCenter=true&width=800&lines=Build+%7C+Learn+%7C+Improve+%7C+Deploy;Learning+Flask+One+Project+at+a+Time+%F0%9F%90%8D;More+Features+Coming+Soon+%F0%9F%9A%80" alt="Typing SVG">

</a>

<br><br>

<img src="https://komarev.com/ghpvc/?username=areenphadtare&label=Profile%20Views&color=0e75b6&style=for-the-badge" alt="Profile Views">

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:00C9FF,50:0072FF,100:7F00FF" alt="Footer">
