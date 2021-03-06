# Travel-O - Back End
Welcome to Travel-O! Share your favorite travel destinations, museums, restaurants... ANYTHING! Snap a photo, write a description and provide an address to share your favorite locations with your friends or any users around the world! 

Contains functions to enable CRUD operations for client side application. Deployed with Heroku

VISIT THE LIVE SITE HERE: https://travel-o.web.app/

DEMO CREDENTIALS: EMAIL: test@test.com PASSWORD: travel

---

## Technologies Used
- Node
- Express Framework
- Bcrypt
- Jwt Security
- Mongoose
- Multer
- Chai
- Mocha
- Knex

---

---
## Functionality
```
The app uses GET requests to pull the places from the database. 
The app uses POST requests get sent to the database for:
  - Adding users 
  - Creating a new place 
  - Logging a user in 
  - Creating a new user
The app uses DELETE requests when deleting a place. 
The app uses PATCH requests when updating the title or description of a place
```

### Users

Allows users to create accounts 

```    
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }]

```

### Place

Allows user to create a place with a title, description, image and address that allows them to view their location on a pop up map modal

```
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

```
---

## API Overview

## Places

GET 
```
@route   GET api/places/image
@desc    Gets places by ID
@access  Private

router.get('/:pid', placesControllers.getPlaceById);
```
GET 
```
@route   GET api/places/user/:uid
@desc    Gets place but user id
@access  Private

router.get('/user/:uid', placesControllers.getPlacesByUserId);
```
POST
```
@route   POST api/places/image
@desc    Allows users to create new place
@access  Private

[
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
```
PATCH
```
@route   PATCH api/places/:pid
@desc    Allows users to update place
@access  Private

  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
```

## Users

GET
```
@route   GET /api/users
@desc    Gets users
@access  Public

router.get('/', usersController.getUsers);

```
POST
```
@route   GET /api/users/signup
@desc    Allows users to create account
@access  Public

  fileUpload.single('image'),
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
```
POST
```
@route   GET /api/users/login
@desc    Allows user to login
@access  Public

router.post('/login', usersController.login);
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
