### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  

  
## Server / Backend
  
### Models
  
Users model
  
```javascript
{
username: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
favoritesStores: [{type: Schema.Types.ObjectId,ref:'Stores'}],
friends: [{type: Schema.Types.ObjectId,ref:'Users'}],
tagLine: {type: String}
comments: [{type: Schema.Types.ObjectId,ref:'Comments'}]
}
```

Stores model

```javascript
{
storeName: {type: String, required: true},
address: {type: String, required: true, unique: true},
storePhone: {type: String, required: true},
storeImg: {type: String},
deliveryTime: [{type: String}],
priceRange: [{type: String}],
isUnder30Min: {type: Boolean},
products: [{type: Schema.Types.ObjectId,ref:'Products'}]
}
```
  
Products model

```javascript
{
productName: {type: String, required: true},
productImg: {type: String},
productDescription: {type: String, required: true},
}
```  
  
Comments model

```javascript
{
message: {type: String, required: true},
owner: [{type: Schema.Types.ObjectId,ref:'Users'}]
}
``` 

### API Endpoints (backend routes)

| HTTP Method |               URL           |         Request Body         | Success status | Error Status |             Description                   |
|-------------|-----------------------------|------------------------------|----------------|--------------|-------------------------------------------|
|GET          |`/auth/profile`              |Saved session                 |200             |404           |Check if user is logged in and return profile page| 
|POST         |`/auth/signup`               | {name, email, password}      |201             |404           |Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session|
|POST         |`/auth/login`                | {username, password}         |200             |401           |Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session|
|POST         |`/auth/logout`               |(empty)                       |204             |400           |Logs out the user                         
  
  
## Links

### Trello

[Link](https://trello.com/b/odCshzxJ/sharelicious-project)

### Git

[Repository Link](https://github.com/sharelicious/sharelicious)

[Deploy Link](https://sharelicious.herokuapp.com/)

### Slides

[Link](https://slides.com/pablodellacassa/sharelicious/) 

### Contributors

Samy Ali - [`<github>`](https://github.com/SamyAliSanchez) - [`<linkedin>`](https://www.linkedin.com/in/samy-ali-sanchez/)
  
Pablo Dellacassa - [`<github>`](https://github.com/pablodellacassa) - [`<linkedin>`](https://www.linkedin.com/in/pablodellacassa)

Luisa Ojeda - [`<github>`](https://github.com/LuisaEOjeda) - [`<linkedin>`](https://www.linkedin.com/in/luisaojeda/) 

Bjork Weenk - [`<github>`](https://github.com/bjorkweenk) - [`<linkedin>`](https://www.linkedin.com/in/wuqingguibjork/)  
