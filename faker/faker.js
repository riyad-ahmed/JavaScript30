function generateData() {
  var dataContainer = document.getElementById('data');
  var fakerData = faker.fake("{{name.firstName}} {{name.lastName}}, {{address.city}}, {{address.country}}");

  console.log(fakerData);
  document.getElementById('display').innerHTML = fakerData;

}



