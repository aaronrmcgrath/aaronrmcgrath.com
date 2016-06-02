// CLIENT app

// console.log('It works!');

$(document).ready(function(){

  $('.about').on('click', aboutMe);
  $('.resume').on('click', resume);
  $('.examples').on('click', examples);

});


// Shows my About Me section
function aboutMe() {
  event.preventDefault();
  // console.log('This section is About Me!');

  $('#show').empty();
  $('#show').append('<div class="container about-me">' +
  '<h2 class="container text-center" >About Me</h2>' +
  '<p>I\'m new to software development and am extremely exicted and happy to be ' +
  'working with technology to help solve porblems. I graduated from <a ' +
  'href="https://primeacademy.io/" target="_blank" >Prime Digital Academy</a> in ' +
  'Bloomington, MN on May 13th, 2016. There I learned the MEAN Stack (MongoDB, Express.js, AngularJS, and Node.js). ' +
  'I also worked with jQuery, Bootstrap, Angular-Material, PostgreSQL, Passport, and many other ' +
  'great technologies.' +
  '<br/>' +
  '<br/>' +
  'My family is what makes me the happiest. I have a loving wife and two amazing boys. ' +
  'They always give me something to smile about. My hobbies are: hiking, gardening, video-games, ' +
  'movies/tv, comedy, writing, beer, board games, deep conversation, and discovery! ' +
  'I\'m addicted to learning and love to explore new oppritunities. Please feel free to contact me by ' +
  '<a href="mailto:info@aaronrmcgrath.com" >email</a>.</p>' +
  '<div class="links text-center"><p>Here are links to my LinkedIn Profile and my Github ' +
  'repository<p>' +
  '<ul><li><a href="https://www.linkedin.com/in/aaron-mcgrath-969a9ba8" target="_blank">My LinkedIn Profile</a></li>' +
  '<li><a href="https://github.com/aaronrmcgrath" target="_blank">My GitHub Repository</a></li>' +
  '</ul>' +
  '</div>' +
  '</div>');

}


// Shows my Resume
function resume() {
  event.preventDefault();
  $('#show').empty();
  // console.log('This section is my Resume!');

  $('#show').append('<div class="container text-center resume-section" >' +
  '<object data="/assets/files/armcgrath_resume.pdf" type="application/pdf" ' +
  'width="100%" height="1000 px" >' +
  '</object>' +
  '</div>');
}


// Shows my Examples
function examples() {
  event.preventDefault();
  $('#show').empty();
  // console.log('This section has Examples!');

  $('#show').append('<div class="container example-section" >' +
  '<h2 class="container text-center" >Examples</h2>' +
  '<ul><li><h4>Calculator</h4><p>This was our Weekend 3 assignment at Prime. ' +
  'We had just began learning about servers. The idea here is to do all the logic ' +
  'server side. Check it out <a href="https://whispering-brushlands-63295.herokuapp.com/" ' +
  'target="_blank" >here!</a></p></li>' +
  '<li><h4>Task List</h4><p>Our Weekend 4 assignment was a Task list. It was our ' +
  'first Full Stack application. We just learned about Databases. In this Project ' +
  'I used jQuery and a PostgreSQL database. I hosted it with heroku, check it out ' +
  '<a href="https://desolate-beyond-35018.herokuapp.com/" target="_blank" >here!</a></p></li>' +
  '<li><h4>Home Grown Gardens</h4><p>My solo project at Prime. Coming Soon!</p></li>' +
  '<li><h4>aaronrmcgrath.com</h4><p>This site was built with jQuery and Bootstrap.</p></li>' +
  '</ul>' +
  '</div>');
}
