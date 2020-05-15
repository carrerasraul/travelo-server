# Travel-O - Back End
Server side of React DevConnector Client. Contains functions to enable CRUD operations for client side application.

Visit the live site here: https://travel-o.web.app/

---

## Technologies Used
- Node
- Express Framework
- Bcrypt
- Jwt Security
- Mongoose
- Multer

---

## Functionality

### Users

Allows users to create accounts 

```    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
```

### Profile

Allows user to create a profile including their job experience, education, github account and social media platforms

```
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [{
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    education: [{
        school: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        fieldOfStudy: {
            type: String,
            required: true
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
```

### Posts

Allows user to make posts as well as comment and like them

```
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

```
---

## API Overview

## Auth

GET
```
api/auth
```
POST
```
api/auth

        const {
            email,
            password
        } = req.body;
```

## Posts

POST
```
@route   POST api/posts
@desc    Create a post
@access  Private

newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })
```
GET
```
@route   GET api/posts
@desc    Get all posts
@access  Private

posts = await Post.find().sort({
            date: -1
        });
```
GET
```
@route   GET api/posts/:id
@desc    Get post by id
@access  Private

post = await Post.findById(req.params.id)
```
DELETE
```
@route   DELETE api/posts/;id
@desc    Delete a post
@access  Private

post = await Post.findById(req.params.id)
        await post.remove();

```
PUT
```
@route   PUT api/posts/like/:id
@desc    Like a post
@access  Private

        post.likes.unshift({
            user: req.user.id
        });

        await post.save()
```
PUT
```
@route   PUT api/posts/unlike/:id
@desc    Unlike a post
@access  Private

        post.likes.splice(removeIndex, 1)

        await post.save()
```
POST
```
@route   POST api/posts/comment/:id
@desc    Comment on a post
@access  Private

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        };
```
DELETE
```
@route   DELETE api/posts/comment/:id/:comment_id
@desc    Delete comment
@access  Private

        post.comments.splice(removeIndex, 1)

        await post.save()
```

## Profile

GET
```
@route   GET api/profile/me
@desc    Get current users profile
@access  Private

profile = await Profile.findOne({
            user: req.user.id
        }).populate('user',
            ['name', 'avatar'])
```
POST
```
@route   POST api/profile
@desc    Create or update a user profile
@access  Private

const {
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body;
        
        // Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if (company) profileFields.company = company;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (bio) profileFields.bio = bio;
        if (status) profileFields.status = status;
        if (githubusername) profileFields.githubusername = githubusername;
        if (skills) {
            profileFields.skills = skills.split(',').map(skill => skill.trim());
        }

        // Build Social object
        profileFields.social = {}
        if (youtube) profileFields.social.youtube = youtube;
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;
```
GET
```
@route   GET api/profile
@desc    Get all profiles
@access  Public

profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['name', 'avatar'])
```
DELETE
```
@route   DELETE api/profile
@desc    Delete profile, user & posts
@access  Private

        // Remove users posts
        await Post.deleteMany({
            user: req.user.id
        })

        // Remove profile
        await Profile.findOneAndRemove({
            user: req.user.id
        });

        // Remove user
        await User.findOneAndRemove({
            _id: req.user.id
        });
```
PUT
```
@route   api/profile/experience
@desc    Add profile experience
@access  Private

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;
```
DELETE
```
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
```
PUT
```
@route   PUT api/profile/education
@desc    Add profile education
@access  Private

    const {
        school,
        degree,
        fieldOfStudy,
        from,
        to,
        current,
        description
    } = req.body;
```
DELETE
```
@route   DELETE api/profile/education/:edu_id
@desc    Delete education from profile
@access  Private

        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);
```
GET
```
@route   GET api/profile/github/:username
@desc    Get user repos from github
@access  Public
```

## Profile

POST
```
@route   POST api/users
@desc    Register user
@access  Public

        const {
            name,
            email,
            password
        } = req.body;
```


---
## Screenshots

### Landing
![Landing](screenshots/Landing.png)

### Place Card
![Place Card](screenshots/PlaceCard.png)

### Map Modal
![Map Modal](screenshots/Map.png)

### New Place Page
![New Place Page](screenshots/NewPlace.png)

### Login Page
![Login Page](screenshots/Login.png)

### SignUp Page
![SignUp Page](screenshots/Signup.png)
