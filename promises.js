 const url1= "https://apis.ccbp.in/jokes/random";

fetch(url1)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    //statement-1
    console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
  });

//statement-2
console.log("fetching done");
 const url = "https://a.ccbp.in/random";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  return response;
});
responsePromise.catch((error) => {
  console.log(error); // TypeError{ "Failed to fetch" }
}); 
let promise = new Promise(function (resolve, reject) {
	const x = "Coder";
	const y = "Coder";
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, You are a Coder');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
