// ============================
// Photo Gallery - Custom JS
// ============================

// When a gallery image is clicked, update modal with image & caption
$(".gallery img").click(function() {
  let src = $(this).attr("src");
  let caption = $(this).attr("alt");
  $(".modal-img").attr("src", src);
  $(".modal-caption").text(caption);
});
