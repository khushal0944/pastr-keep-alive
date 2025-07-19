const https = require("https");

const url = "https://online-clipboard-99xm.onrender.com/check"; // Replace with your backend URL

const timestamp = new Date().toISOString();

https
	.get(url, (res) => {
		console.log(`[${timestamp}] Pinged: ${url}, Status: ${res.statusCode}`);
	})
	.on("error", (e) => {
		console.error(`[${timestamp}] Error: ${e.message}`);
	});
