
topicSidebar = document.querySelector('.topic-sidebar');
function openNav() {
    topicSidebar.classList.toggle("topic-sidebar-close");
    
}


window.addEventListener('click', function(e){   
  if (! document.querySelector('.topic-sidebar').contains(e.target) && !document.getElementById('Menu').contains(e.target)){
    topicSidebar.classList.add("topic-sidebar-close");
  } 
});

window.addEventListener('resize', function(e){   
    if (window.innerWidth<1100){
      topicSidebar.classList.add("topic-sidebar-close");
    } 
  });

  $(document).ready(function () {
    $('#aso1').click(function () {
            $('#lesson-content').load('aso1.html');
     });
  });