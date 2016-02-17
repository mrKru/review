$(document).ready(function() {
	tinymce.init({ selector:'textarea.editor' });
	$('.add-coment').on('click', function() {
	$('.simple-review-form').show();
	});
	$(".review-form").submit(function() {
		var now = new Date();

		var review_data = {
			username: "",
			contents: "",
			date: now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear(),
			email: "",
		};
		review_data.username = $("input[name='name']").val();
		review_data.content = $("textarea[name='content']").val();
		review_data.email = $("input[name='email']").val();

		var review_clone = $(".review-template").clone();
		review_clone.find(".review-date").html(review_data.date);
		review_clone.find(".review-username").html(review_data.username);
		review_clone.find(".review-content").html(review_data.contents);
		review_clone.find(".review-email").html(review_data.email);

		$(".review-container").append(review_clone).removeClass(".review-template");


		$("simple-review-form input, .simple-review-form textarea").val('');

		return false;
	});
});