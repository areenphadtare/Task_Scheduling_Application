from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///TODO.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=True)
    completed = db.Column(db.Boolean, default=False)
 
def __repr__(self):
    return f'<Todo {self.title}>'


@app.route('/')
def hello():
    return render_template('index.html')
    #return 'Hello, World!'
if __name__ == '__main__':
    app.run(debug=True)