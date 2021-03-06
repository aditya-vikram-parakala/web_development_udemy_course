$(document).ready(function() {
  
    $('#search-bar').stop(true, true, true).click(function() {
      $('.welcome').animate({
        opacity: '0'
      }, 600);
    });
    
    var loadData = function() {
      
      var search = $('#search-bar').val();
      var wikiUrl = "https://en.wikipedia.org/w/api.php";
      
      wikiUrl += '?' + $.param({
        'action': 'opensearch',
        'format': 'json',
        'utf8': '1',
        'search': search
      });
      
      var wikiFail = setTimeout(function() {
          $('.article-list').append(
            '<h2 class="text-center article-title">Failed loading resources</h2>'
          );
        }, 9000);
      
      $('.article-list').empty();
      
      $('.search-row').css('top', '100px');
      
      
      
      $.ajax({
        'url': wikiUrl,
        'dataType': 'jsonp'
      }).done(function( data ) {
        console.log(data);
        
        var how_many = data[1].length;
        
  
        for (var i = 1;i < how_many;i++) {
          $('.article-list').append(
            '<a href="' + data[3][i] + '" target="_blank"><li class="article">' + 
              '<h2 class="article-title">' + data[1][i] + '</h2>' + 
              '<p class="article-snippet">' + data[2][i] + '</p>' + 
            '</li></a>'
          ).find('li:last').fadeToggle(700).css('display', 'block');
          clearTimeout(wikiFail);
        }
      }).fail(wikiFail);
      
      return (false);
    }
    
    var resetData = function() {
      $('.article-list').empty();
      $('#search-bar').val('');
      $('.search-row').css('top', '50%');
    }
    
    $('.wiki-form').submit(loadData);
    $('#reset-btn').mousedown(resetData);
    
    $('#search-bar').focus(function() {
      if ($(this).val().length !== 0)
        $('#reset-btn').css('display', 'inline-block');
      $('#search-bar').keyup(function() {
      if ($(this).val().length > 0)
        $('#reset-btn').stop(true, false).fadeIn(300).css('display', 'inline-block');
      else
        $('#reset-btn').stop(true, true).fadeOut(300);
    })
    })
    .focusout(function() {
      $('#reset-btn').stop(true, true).css('display', 'none');
    });
    
  });