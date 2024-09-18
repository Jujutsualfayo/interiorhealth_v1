from flask import Flask, render_template, request, redirect, url_for, session
from flask_login import LoginManager, login_user, logout_user, login_required

app = Flask(__name__)
login_manager = LoginManager(app)

# Users for demonstration
users = {"testuser": "password123"}

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users and users[username] == password:
            login_user(username)
            return redirect(url_for('home'))
    return render_template('login.html')

