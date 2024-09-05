from flask import Flask, request

app = Flask(__name__)

posts = [
    {"userId": 1, "id": 1, "title": "this is the title", "body": "this is the content"}
]


@app.route('/')
def index():
    return 'Hello, World!'


@app.route('/post/add', methods=['POST'])
def add_post():
    d_dict = request.get_json()
    if d_dict["id"] in [post["id"] for post in posts]:
        return 'already exists', 400
    print(d_dict)
    posts.append(d_dict)
    return 'got the post request'


@app.route('/post', methods=['GET'])
def get_post():
    print(request.get_data())
    _id = request.get_json()["id"]
    for post in posts:
        if post['id'] == _id:
            return post

    return 'not found', 404


@app.route('/post/delete', methods=['DELETE'])
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
        print("DEL: ", _to_be_del)
        posts.remove(_to_be_del)
        return 'deleted'


@app.route('/post/edit', methods=['PUT'])
def edit_post():
    _to_be_updated = None
    _id = request.get_json()["id"]
    for post in posts:
        if post['id'] == _id:
            _to_be_updated = post
            break
    if _to_be_updated is None:
        return 'not found', 404
    else:
        _index = posts.index(_to_be_updated)
        posts[_index] = request.get_json()

        return 'updated'


app.run(debug=True)
