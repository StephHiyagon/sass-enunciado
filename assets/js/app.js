var students;

 $.get( "http://laboratoria.cuadra.co:9339/api/v1/students/", function( data ) {
  console.log(data);
  students=data;
});

setTimeout(function(){
  console.log(students);
  for(var i=0;i<students.length;i++){
    $('ol').append('<li>'+students[i].name+'<input type="checkbox"> </li>');
  }

},2000);
