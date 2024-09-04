from flask import Flask, request

app = Flask(__name__)

posts = []


@app.route('/')
def index():
    return 'Hello, World!'


@app.route('/post/add', methods=['POST'])
def add_post():
    posts.append(request.get_json())
    return 'got the post request'


@app.route('/posts', methods=['GET'])
def get_post():
    _id = request.get_json()["id"]
    for post in posts:
        if post['id'] == _id:
            return post

    return 'not found'


@app.route('/posts', methods=['DELETE'])
def del_post():
    _to_be_del = None
    _id = request.get_json()["id"]
    for post in posts:
        if post['id'] == _id:
            _to_be_del = post
            break
    if _to_be_del is None:
        return 'not found'
    else:
        posts.remove(_to_be_del)
        return 'deleted'


app.run(debug=True)
