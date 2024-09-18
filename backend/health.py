from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return render_template('home.html')

# Drug listings
@app.route('/drugs')
def drugs():
    return render_template('drugs.html')

# User registration page
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Process registration data
        return redirect(url_for('home'))
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)

