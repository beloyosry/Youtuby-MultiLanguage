$(document).ready(function () {
  $("#myBtn").on("click", function () {
    read();
  });
  $(".reply").click(function () {
    $(this).parents("div.row").next("div.card").toggle(300);
  });
});
function read() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    if (document.body.getAttribute("dir") === "ltr") {
      btnText.innerHTML = "Show More";
    } else if (document.body.getAttribute("dir") === "rtl") {
      btnText.innerHTML = "عرض المزيد";
    }
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    if (document.body.getAttribute("dir") === "ltr") {
      btnText.innerHTML = "Show Less";
    } else if (document.body.getAttribute("dir") === "rtl") {
      btnText.innerHTML = "عرض عناصر أقل";
    }
    moreText.style.display = "inline";
  }
}
