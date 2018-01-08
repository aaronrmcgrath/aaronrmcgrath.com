// CLIENT app

// console.log('It works!');

$(document).ready(function(){

  aboutMe();

  $('.about').on('click', aboutMe);
  $('.resume').on('click', resume);
  $('.examples').on('click', examples);

});


// Shows my About Me section
function aboutMe() {
  event.preventDefault();
  $('#show').empty();
  // console.log('This section is About Me!');


  $('#show').append('<div class="container about-me details">' +
  '<h2 class="container section-header text-center" >About Me</h2>' +
  '<br/>' +
  '<p>I\'m a software developer that loves learning and solving problems. I graduated from <a class="plink" ' +
  'href="https://primeacademy.io/" target="_blank" >Prime Digital Academy</a> in ' +
  'Bloomington, MN in 2016. There I learned the MEAN Stack (MongoDB, Express.js, AngularJS, and Node.js). ' +
  'I also worked with jQuery, Bootstrap, Angular-Material, PostgreSQL, Passport, and many other ' +
  'great technologies.</p>' +
  '<br/>' +
  '<p>Currently I\'m working at <a class="plink" href="http://propelware.com" target="_blank" >Propelware</a> ' +
  'helping our customers save time and eliminate as much data entry as possible! We accomplish this by using ' +
  '<a class="plink" href="https://autofy.propelware.com" target="_blank" >Autofy</a>, our solution, ' +
  'to integrate their accounting software (example: <a class="plink" href="https://quickbooks.com" target="_blank" >' +
  'QuickBooks</a>) with other platforms such as <a class="plink" href="https://salesforce.com" target="_blank" >Salesforce.com</a>. ' +
  'I\'ve been there since August of 2016 and am learning a ton and thoroughly enjoying my time as a software developer.</p>' +
  '<br/>' +
  '<p>My family and friends are what make me the happiest. Although most of the time I\'m a bit of a homebody (or hermit), ' +
  'I cherish any time with my friends and can be a social butterlfy occasionally. Laura (my amazing wife) and I are proud parents of our ' +
  'two crazy and magnificent boys. They always give us something to smile about, and a reason to keep an ear out! ' +
  'My interests are: hiking\/camping, gardening, video-games, comedy, cooking, movies\/tv (binge watcher here), ' +
  'writing (code, prose, or poetry), board games, deep conversation, and discovery. I\'m addicted to ' +
  'exploring, learning, and enjoy creating! Please feel free to contact me by <a class="plink" href="mailto:info@aaronrmcgrath.com" >email</a>.</p>' +
  '<br/>' +
  '<div><p class="container text-center" >Here are links to my LinkedIn Profile and my Github ' +
  'repository<p>' +
  '<div class="links">' +
  '<a class="link" href="https://www.linkedin.com/in/aaron-mcgrath-969a9ba8" ' +
  'target="_blank"><img src="/assets/files/linkedin_logo_tm.png" width="5%" height="5%" /></a> ' +
  '<a class="link" href="https://github.com/aaronrmcgrath" target="_blank">' +
  '<img src="/assets/files/GitHub_logo_offical.png" width="5%" height"5%" /></a>' +
  '</div>' +
  '</div>' +
  '</div>');

}


// Shows my Resume
function resume() {
  event.preventDefault();
  $('#show').empty();
  // console.log('This section is my Resume!');

  $('#show').append('<div class="resume-section text-center details" >' +
  '<p>If you don\'t have a PDF plugin for this browser, no worries, download it ' +
  '<a class="plink" href="/assets/files/armcgrath_resume.pdf" target="_blank" >here</a></p>' +
  '<img class="resume" src="/assets/files/armcgrath_resume.png" ' +
  'width="100%" height="100%" >' +
  '</img>' +
  '</div>');
}


// Shows my Examples
function examples() {
  event.preventDefault();
  $('#show').empty();
  // console.log('This section has Examples!');

  $('#show').append('<div class="container example-section details" >' +
  '<h2 class="container section-header text-center" >Projects</h2>' +
  '<ul>' +
    '<li>' +
      '<h4><a class="projects plink" href="https://mysterious-gorge-27053.herokuapp.com/" target="_blank" >' +
      'Home Grown Gardens</a></h4><p>My solo project at Prime. I created a garden app to help home' +
      'gardeners better plan, organize, and track plants they have and when they planted. ' +
      'The database is updated by the community of home gardeners. If a plant doesen\'t exist, ' +
      'just add it! You can enjoy the app <a class="plink" href="https://mysterious-gorge-27053.herokuapp.com/" ' +
      'target="_blank" >here</a>!</p>' +
    '</li>' +
    '<li>' +
      '<h4><a class="projects plink" href="http://arcade.aaronrmcgrath.com" target="_blank" ' +
      '>Classic Arcade Games</a></h4><p>Having some fun building some classic arcade style games ' +
      'in html with javascript. Check them out <a class="plink" href="http://arcade.aaronrmcgrath.com" ' +
      'target="_blank" >here!</a></p>' +
    '</li>' +
    '<li>' +
      '<h4><a class="projects plink" href="https://whispering-brushlands-63295.herokuapp.com/" target="_blank" ' +
      '>Calculator</a></h4><p>This is the third assignment at Prime. ' +
      'We had just begun learning about servers. The idea here is to do all the logic ' +
      'server side. Check it out <a class="plink" href="https://whispering-brushlands-63295.herokuapp.com/" ' +
      'target="_blank" >here!</a></p>' +
    '</li>' +
    '<li>' +
      '<h4><a class="projects plink" href="https://desolate-beyond-35018.herokuapp.com/" target="_blank" >Task List</a>' +
      '</h4><p>Fourth assignment at Prime was a Task list. It was our first Full Stack application. ' +
      'We just learned about Databases. In this Project I used jQuery and a PostgreSQL database. ' +
      'I hosted it with heroku, check it out <a class="plink" href="https://desolate-beyond-35018.herokuapp.com/" ' +
      'target="_blank" >here!</a></p>' +
    '</li>' +
    '<li>' +
      '<h4><a class="projects plink" href="http://www.aaronrmcgrath.com/" >aaronrmcgrath.com</a>' +
      '</h4><p>This site was built with jQuery and Bootstrap.</p>' +
    '</li>' +
  '</ul>' +
  '</div>');
}
