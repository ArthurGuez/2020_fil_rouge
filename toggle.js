/*const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
	document.body.classList.toggle('light');
});*/

/*function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }*/

  $('#mode').change(function(){   
    
    if ($(this).prop('checked'))
    {
        $('body').addClass('light-mode);
    }
    else
    {
        $('body').removeClass('light-mode');
    }
    
});