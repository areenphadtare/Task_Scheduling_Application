from flask import Flask,render_template,request
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
      return f'<Todo {self.title} - {self.id}>'


@app.route('/',methods=['GET','POST'])
def hello():
    if request.method=='POST':
      print(request.form['title'])
    todo=Todo(
        title='Sample Task', 
        description='This is a sample task.',
        completed=False
        )
    db.session.add(todo)
    db.session.commit()
    return render_template('index.html')
    #return 'Hello, World!'

@app.route('/todos')
def get_todos():
    todos = Todo.query.all()
    print(todos)
    return render_template('index.html', todos=todos)
if __name__ == '__main__':
    app.run(debug=True)