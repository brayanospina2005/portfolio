const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_kr7hhxl';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

  document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("cardes")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  const close = document.querySelector(".close");
  const open = document.querySelector(".ham");
  const menu = document.querySelector(".menu");
  close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
  });
  open.addEventListener("click", () => {
    menu.style.visibility = "visible";
  });
  
  /* contact */
  
  $('.js-input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });
  