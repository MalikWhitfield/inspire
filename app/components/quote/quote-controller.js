import QuoteService from "./quote-service.js";

let _qS = new QuoteService

function drawQuote(quote) {
	console.log(quote)
	let template = ''
	template += `<div class="row quoteStyle">
			<div class="col-12 justify-content-center d-flex justify-content-center">
				<div id="quote">
					<h2><i>"${quote.body}" </i><h/2>
					<h4><i> - ${quote.author}</i><h/4>
				</div>
			</div>
		</div>`
	document.getElementById('quote').innerHTML = template
}


export default class QuoteController {
	constructor() {
		this.getQuote(drawQuote)
	}

	getQuote(drawQuote) {
		_qS.getQuote(drawQuote)
	}
}
