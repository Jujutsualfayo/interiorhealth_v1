from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def landing_page():
    return render_template('index.html')

@main.route('/about')
def about_page():
    return render_template('about.html')

@main.route('/donate')
def donate_page():
    return render_template('donate.html')

@main.route('/contacts')
def contact_page():
    return render_template('contact.html')

@main.route('/projects')
def projects_page():
    return render_template('projects.html')

