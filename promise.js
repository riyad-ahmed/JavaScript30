const accesskey = "ufBwR6u6nA9ZJBff10VoFTTuSL9uoBRFmgp_QAtqpt0";

const secretkey = "j7XRD7IldLtrZvuJELyy3DuqaO5pxcMG7ubCcPNmk3I";


const display = document.getElementById('display');

async function getData() {
  fetch(`https://api.unsplash.com/photos/?client_id=${accesskey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      display.src = data[5].urls.regular;
      // display.innerHTML = data[0].urls.regular;
    })
}


// let inputData = "";

// async function getData() {
//   inputData = display.value;
//   // const url = `https://api.unsplash.com/search/photos/?$query=${inputData}$client_id=${accesskey}`;
//   const url = `https://api.unsplash.com/photos/?client_id=${accesskey}`
//   const res = await fetch(url);
//   const data = await response.json();

//   const results = data.results;

//   console.log(data);

// }