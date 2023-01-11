let backendData = {name:'ali',age:22}

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve(backendData);
      reject('rejected')
    });
    const data = await myPromise;
    console.log(data)
  }
  
  myDisplay();