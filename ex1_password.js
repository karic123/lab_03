function validate()
{

  var textbox = document.getElementById('pw1');
  var textbox = document.getElementById('pw2');

  // alert(pw1.value)

  if (pw1.value==pw2.value )
    {
      // if ()
      if(pw1.value.length > 7)
      {
        alert('Good password!');
      }
      else {
        alert('password is too short.');
      }
    }
    else {
      alert('your passwords do not match.');
    }
}
