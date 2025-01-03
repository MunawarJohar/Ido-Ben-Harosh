$(document).ready(function () {
  $(".Linkedin").click(function () {
    // Replace the URL with your LinkedIn profile link
    window.open("https://www.linkedin.com/in/ido-ben-harosh-0a4aaa221/", "_blank");
  });
  $(".Email").click(function () {
    // Replace the email address with your email
    window.open("mailto:idobh3866@gmail.com", "_blank");
  });
  $(".Whatsapp").click(function () {
    // Replace the phone number with your phone number
    window.open("https://wa.me/0527532354", "_blank");
  }); 
  $(".Github").click(function () {
    // Replace the URL with your GitHub profile link
    window.open("https://github.com/IdoBH123", "_blank");
  });
  $(".about").click(function () {
    // Navigate to the about.html page in the same tab
    window.location.href = "about.html";
  });
  $(".talk-to-me").click(function () {
    // Navigate to the contact.html page in the same tab
    window.location.href = "index.html#talk-to-me";
  });
  $(".explore-button").click(function () {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
  }, 1000); // 1000ms for smooth scrolling
  });
});
