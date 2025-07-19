const https = require("https");

const url = "https://online-clipboard-99xm.onrender.com/check"; // Replace with your backend URL

https
	.get(url, (res) => {
		console.log(`Pinged: ${url}, Status: ${res.statusCode}`);
	})
	.on("error", (e) => {
		console.error(`Error: ${e.message}`);
	});
