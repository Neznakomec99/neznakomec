$(document).on('click', '#ueberTab a', function(e) {
          otherTabs = $(this).attr('data-secondary').split(',');
          for(i= 0; i<otherTabs.length;i++) {
            nav = $('<ul class="nav d-none" id="tmpNav"></ul>');
            nav.append('<li class="nav-item"><a href="#" data-toggle="tab" data-target="' + otherTabs[i] + '">nav</a></li>"');
            nav.find('a').tab('show');
          }
        });