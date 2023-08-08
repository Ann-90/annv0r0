// import telegram from "../../api/telegram.js";

// export default async (req, res) => {
// 	const { name, email, letter } = req.body;
// 	// console.log("I am here");
// 	const message = `<b>You have new message:</b>

// 			name: ${name}
// 			email: ${email}
// 			letter: ${letter}

// 		`;

// 	// console.log(message);
// 	try {
// 		// await telegram(message);
// 		res.statusCode = 200;
// 		res.setHeader("Content-Type", "application/json");
// 		res.end(JSON.stringify({ ok: true }));
// 	} catch {
// 		res.statusCode = 500;
// 		res.setHeader("Content-Type", "application/json");
// 		res.end(JSON.stringify({ ok: false, url: "www.no.sad" }));
// 	}
// };
