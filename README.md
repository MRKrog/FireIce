## Ice and Fire Redux Challenge

### Setup
  This application is built from create-react-app
* `npm install`
* `npm start`
* Pull down the api: https://github.com/turingschool-examples/ice_fire_api

Both repositories should be cloned down to your machine, and should sit next to
each other. You'll need to create a repo on github to push your frontend
repository to, and then you'll need to change the remote of the frontend app to
match the repo on github.

### What you will be building:

View a recording of it here -> http://recordit.co/X5H0FRbNXO/gif/notify

##### Iteration 0:  

First thing we want to do is fetch some info for us to display.
You are going to want to grab all the house data and populate a redux store. The data can be found at this API end point --> http://localhost:3001/api/v1/houses.

##### Iteration 1:

Once you've populated your redux store with your data you are going to want to display the data as a card. While we wait for our data to arrive please provide a loading gif for our front-end (check out the wolf in the assets folder).

Things to display:
`name, founded, seats, titles, coatOfArms, ancestralWeapons, words`

##### Iteration 2: 

You basically have a full website now. The only thing left to do is test your actions, reducers, mapStateToProps and mapDispatchToProps. You may reference the docs and the `Testing Redux` lesson, but may not look at past projects. 

** You are not required to test your async code (including thunks)

##### Iteration 3:

If you've looked at the house objects coming in, you might have noticed the `swornMembers` array. This is an array of URL endpoints to hit. You'll need to make a `GET` request to `http://localhost:3001/api/v1/character/:id` to retrieve the desired sworn member (The `/character/:id` endpoint will grab that data for you and respond with the house sworn house member). You will also need to send the id of the sworn member in place of :id.

This data should not be fetched until the user clicks on the card. You can
implement this however you like.  Also, you shouldn't
need to make extra fetch calls, so once you've fetched the sworn members for a house once, you shouldn't need to do that again.
