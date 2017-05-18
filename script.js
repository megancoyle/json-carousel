$.getJSON('data.json', function(data) {
  var template = $('#speakerstpl').html();
  var html = Mustache.to_html(template, data);
  $('#carousel').html(html);
}); //getJSON
