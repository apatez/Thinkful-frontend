# Thinkful frontend interview practice

This exercise will prepare you for the frontend interview. Read the instructions carefully and get the tests to pass.

- Use console.log often to help with troubleshooting
- Open a new terminal and run ```npm test``` to run tests

### `Requirements`

1. When the app loads it should make an api call to this url: 
`https://dummyjson.com/users?limit=10&select=firstName,lastName`

2. The api call will get a list of users in this format:
```
{ "users": [
  {
     "id":1,
     "firstName":"Terry",
     "lastName":"Medhurst"
  },
  {...}
]
}
```
**Note that the data is an object with a users property which is an array**

3. Display the users on the screen in the following format:
```firstName lastName```

4. Add a click handler to the element with the user's first and last name

5. When the element is clicked it should make a second api call to this url:
```https://dummyjson.com/posts/user/userId```

**Note the ```userId``` at the end of the url should be a number that changes based on which user is clicked**

6. The api call will get a list of posts in this format:
```
{
   "posts":[
      {
         "id":10,
         "title":"They rushed out the door.",
         "body":"They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
         "userId":1,
         "tags":[
            "fiction",
            "magical",
            "history"
         ],
         "reactions":4
      },
      {...}
   ]
}
``` 
**Note that the data is an object with a posts property which is an array**

7. Display the body of the posts for the user that was clicked on. This means that when the user name is clicked, only posts for that user should be displayed. Posts for other users should not be displayed

8. Write all of the code in the App.js file. Don't creat any new components


