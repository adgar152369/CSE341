exports.getPosts = (req, res, next) => {
    res.json({
        posts: [{
            title: 'First posts', 
            content: 'this is first post!'}]
    });
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
        message: 'Post created',
        post: {
            id: new Date().toISOString(),
            title: title, 
            content: content
        }
    });
}