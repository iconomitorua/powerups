import logo from './logo.svg';
import './App.css';
import {authenticationSuccess,authenticationFailure} from './client.js'
function App() {
  window.Trello.authorize({
    type: 'popup',
    name: '1',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });


var myList = '';

var creationSuccess = function (data) {
  console.log('Card created successfully.');
  console.log(JSON.stringify(data, null, 2));
};
var t = window.TrelloPowerUp.iframe({
  appKey: '8afd7ff12a0a9d0d1495b84cf7f75f9a',
  appName: '1111',
  appAuthor: 'Tao'
});
t.render(function() {
  t.getRestApi()
    .isAuthorized()
    .then(function(isAuthorized) {
      alert('Success!');
    });
});

console.log(window.TrelloPowerUp,t,window.Trello);
var newCard = {
  name: 'New Test Card',
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list
  idList: myList,
  pos: 'top'
};

// window.Trello.post('/cards/', newCard, creationSuccess);
  return (
    <div className="App">
    </div>
  );
}

export default App;
