(function ($) {
	$.fn.emailValidator = function (input) {
		let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		return regex.test(input)
	}
})(jQuery)
