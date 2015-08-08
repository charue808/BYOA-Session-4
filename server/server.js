Meteor.startup(function() {
  
});

// Define the function(s) we wish to call

submitTweet = function(textToStore) {
 
    TweetsCollection.insert({
      tweetText: textToStore,
      createdAt: new Date().getTime(),
      author: Meteor.user().emails[0].address
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