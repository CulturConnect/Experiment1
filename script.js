// Project Name: Landing Page Using SwiperJS
// Youtube: https://youtube.com/@devRasen
// Copyright: ©MdRasen


// -----------------------------feature start
const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
const tabs = Array.from(document.querySelectorAll("[data-tab]"));

let selectedTab = tabsBtns[0].dataset.tabId;

const hideTabs = () => {
  tabs
    .filter((tab) => tab.dataset.tab !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab--hide");
    });

  tabsBtns
    .filter((tab) => tab.dataset.tabId !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab-btn--not-selected");
    });
};
hideTabs();

const handleSelectTab = (e) => {
  selectedTab = e.target.dataset.tabId;

  tabs.forEach((tab) => {
    tab.classList.remove("tabs__tab--hide");
  });

  tabsBtns.forEach((tab) => {
    tab.classList.remove("tabs__tab-btn--not-selected");
  });

  hideTabs();
};

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", handleSelectTab);
});
// -----------------------------feature end
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });


  tailwind.config = {
    theme: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  };

  
  $(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
      $('form input[type="submit"]').bind('click', function (event) {
        if (event) event.preventDefault()
        register($form)
      })
    }
  })
  
  function register($form) {
    $('#mc-embedded-subscribe').val('Sending...');
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
      success: function (data) {
        $('#mc-embedded-subscribe').val('subscribe')
        if (data.result === 'success') {
          // Yeahhhh Success
          console.log(data.msg)
          $('#mce-EMAIL').css('borderColor', '#ffffff')
          $('#subscribe-result').css('color', 'rgb(53, 114, 210)')
          $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
          $('#mce-EMAIL').val('')
        } else {
          // Something went wrong, do something to notify the user.
          console.log(data.msg)
          $('#mce-EMAIL').css('borderColor', '#ff8282')
          $('#subscribe-result').css('color', '#ff8282')
          $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
        }
      }
    })
  };

  
  gsap.from(".stripe1 img",2, {
    opacity: 0,
    stagger: 0.4,
    delay:2
})
gsap.from(".stripe2 img",2, {
    y: 400,
    opacity: 0,
    stagger: 0.4,
    delay:2
})



