Router.route('/', function() {
  this.render('Home');
});

Template.recentUpdates.onCreated(function() {
  this.subscribe("tweetPublication");
});

Template.recentUpdates.helpers({
  
  mostRecentTweets: function() {
    
    var mySelector = {};
    var myOptionFields = {createdAt: -1};
    var myOptions = {sort: myOptionFields};
    var latestTweetTextDictionaries = TweetsCollection.find(mySelector, myOptions);
    
    return latestTweetTextDictionaries;
  }
});

Template.submitTweetLayout.events({
  'click button': function() {
    
    Meteor.call('submitTweetOnServer', $('#tweetInputBox').val());
    
    $('#tweetInputBox').val(' ');
  }
});

Template.tweetItem.helpers({
  submittedAt: function() {
    return new Date(this.createdAt).toString();
  }
});