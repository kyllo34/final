'use strict';

$('.upvote').on('click', likeMe);

function likeMe(e) {
  let counter = $(this).parent().find('span')[0];  
  let count = parseInt($(counter).text());
  count++;
  $(counter).text(count)
}

let templateId = '#newCharacters-template';
var templateScript = Handlebars.compile(templateId);
$('.getMoreCharacters').click(function(event) {
  event.preventDefault();
  $.ajax('/characters', {method:'GET', dataType: 'JSON'})
  .then(result => console.log(result))
  .catch(error => { throw error; });
})

// StarWars.prototype.render = function () {
//   const source = $('#star-wars').html();
//   let template = Handlebars.compile(source);
//   return template(this)
// }