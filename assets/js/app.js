var students = $.get( "http://laboratoria.cuadra.co:9339/api/v1/students/", function( data ) {
  console.log(data);
  return data.responseJSON;
});

console.log(students);
