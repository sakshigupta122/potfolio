$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // Theme Switcher
  const themeSwitch = document.querySelector(".theme-switch");
  const body = document.querySelector("body");

  themeSwitch.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.setAttribute("data-theme", "light");
      themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      body.setAttribute("data-theme", "dark");
      themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });

  // Form Submission with Backend Integration
  $("form").on("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: $('input[name="Name"]').val(),
      email: $('input[name="name"]').val(),
      subject: $('input[name="Subject"]').val(),
      message: $('textarea[name="Message"]').val(),
    };

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData
      );
      if (response.status === 200) {
        alert("Message sent successfully!");
        this.reset();
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  });

  // Project Filter
  $(".project-filters li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".project-item").show();
    } else {
      $(".project-item")
        .not("." + filter)
        .hide();
      $(".project-item")
        .filter("." + filter)
        .show();
    }
  });
});

// Add loading animation
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
