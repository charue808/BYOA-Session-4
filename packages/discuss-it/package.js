Package.describe({
  name: 'charue808:discuss-it',
  version: '0.0.8',
  // Brief, one-line summary of the package.
  summary: 'A text area and list comments from users like twitter ala 2006',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'minimongo'], 'client');
  api.use(['mongo'], ['client', 'server']);
  api.use(["twbs:bootstrap"], 'client');
  api.use(['spacebars'], ['client', 'server']);
  api.use(["iron:router"], 'client');
  api.use(["copleykj:livestamp"], 'client');
  api.use(["jparker:gravatar"], ['client', 'server']);
  api.use(["accounts-password"], ['client', 'server']);
  api.addFiles(['lib/collections/tweets-collection.js'], ['client', 'server']);
  api.addFiles(['lib/server/server.js'], 'server');
  api.addFiles(['lib/client/templates/discuss-it.html', 'lib/client/templates/discuss-it.js'], 'client');
  api.export("submitTweet", 'server');
  api.export("TweetsCollection", ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('charue808:discuss-it');
  api.addFiles('discuss-it-tests.js');
});
