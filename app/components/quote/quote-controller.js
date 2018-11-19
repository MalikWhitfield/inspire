import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {
	console.log(quote)
	let template = ''
	template += `<div class="row">
			<div class="col-12">
				<div id="quote">
					<i></i>
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
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
