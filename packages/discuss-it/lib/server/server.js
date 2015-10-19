// Define the function(s) we wish to call

/*
function coolFunction(funcx)
{
  funcx(2);
}

y = coolFunction(submitTweet);
y(someTextToStore)

y = coolFunction(myFunction);
submitTweet = function myFunction(textToStore) {

*/

submitTweet = function (textToStore) {
  
  var authorEmail = Meteor.user().emails[0].address;
 
    TweetsCollection.insert({
      tweetText: textToStore,
      createdAt: new Date().getTime(),
      author: Meteor.user().emails[0].address,
      authorImageURL:  Gravatar.imageUrl(authorEmail)
    });
 
}

// Add function(s) to a dictionary
var serverMethods = {submitTweetOnServer: submitTweet};

// Tell Meteor which function(s) we plan on calling on the client
Meteor.methods(serverMethods);

// Find and return the latest tweets
var tweetPublishingFunction = function() {
  return TweetsCollection.find();
}

// Pass publish function to publish command
Meteor.publish('tweetPublication', tweetPublishingFunction);