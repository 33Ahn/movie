# movie-theater-api
Movie Theater Project for Bootcamp Week 7 Day 5

### Goal
Be able to create an express server app demonstrating knowledge of Express and RESTful APIs:

1. CRUD Routing
2. Testing with Postman
3. Express Routers
4. Server-Side Validation

### Express Connection
1. Install Dependencies 
        install sqlite sequelize express express-validator nodemon

2. Create Express Server
        Create a file for your server, and initialize it on port 3000 using Express

3. Define Routes -- Create the route handlers for the project, per these definitions:

    Users

        GET all users
        GET one user
        GET all shows watched by a user (user id in req.params) 
        PUT update and add a show if a user has watched it

    Shows

        GET all shows
        GET one show
        GET shows of a particular genre (genre in req.params)
        PUT update rating of a show that has been watched
        PUT update the status of a show 
        DELETE a show
        Make sure to include your routers in a directory named routes

4. Tests -- to test your endpoints, use Postman
5. Commit & Push
    git add . , git commit -m "somemessge", git push

### Checklists

1. Create your Express Server
2. Create your Express Routers
3. User Router can get all users from the database using the endpoint “/users”
4. User Router can get one user from the database using an endpoint such as “/users/1” or “/users/2”
5. User Router can get all the shows watched by a user using an endpoint such as “/users/2/shows”, or “/users/8/shows”
6. User Router can update and add a show if a user has watched it using an endpoint such as “/users/2/shows/9” or “/users/1/shows/2”
7. Show Router can get all shows from the database using the endpoint “/shows”
8. Show Router can get one show from the database using an endpoint such as “/shows/2” or “/shows/5”
9. Show Router can get shows of a specific genre using an endpoint such as “/shows/genres/Comedy“ or “/shows/genres/Drama”
10. Show Router can update a rating on a specific show using an endpoint such as “/shows/4/watched” or “/shows/9/watched”
11. Show Router can update the status on a specific show from “canceled” to “on-going” or vice versa using an endpoint such as “/shows/3/updates” or “/shows/9/updates”
12. Show Router can delete a show
13. Include Server-Side Validation when updating the “status” of a show. The “status” field cannot be empty and must be between 5 and 25 characters. (OPTIONAL)
14. Include Server-Side Validation when updating the “rating” of a show. The “rating” field cannot be empty.  (OPTIONAL)

15. got rid of movie-theater-api remote repo and created a new repo "movie"
