export function nextPorto() {
  let elemen = document.getElementsByClassName("card-porto");
  let IndexElemenSelanjutnyaSekarang;

  Array.from(elemen).forEach((element, index) => {
    if (element.classList.contains("item1")) {
      element.classList.remove("item1");
      element.classList.add("d-none");
    }

    if (element.id == "item2") {
      element.removeAttribute("id");
      element.classList.add("item1");
    }

    if (element.classList.contains("item3")) {
      element.classList.remove("item3");
      element.setAttribute("id", "item2");
      IndexElemenSelanjutnyaSekarang = index + 1;
    }
  });

  if (!elemen.item(IndexElemenSelanjutnyaSekarang)) {
    elemen.item(0).classList.add("item3");
    elemen.item(0).classList.remove("d-none");
  } else {
    elemen.item(IndexElemenSelanjutnyaSekarang).classList.add("item3");
    elemen.item(IndexElemenSelanjutnyaSekarang).classList.remove("d-none");
  }
}

export function previousPorto() {
  let elemen = document.getElementsByClassName("card-porto");
  let IndexElemenSebelumnyaSekarang;

  Array.from(elemen).forEach((element, index) => {
    if (element.classList.contains("item3")) {
      element.classList.remove("item3");
      element.classList.add("d-none");
    }

    if (element.id == "item2") {
      element.removeAttribute("id");
      element.classList.add("item3");
    }

    if (element.classList.contains("item1")) {
      element.classList.remove("item1");
      element.setAttribute("id", "item2");
      IndexElemenSebelumnyaSekarang = index - 1;
    }
  });

  if (!elemen.item(IndexElemenSebelumnyaSekarang)) {
    elemen.item(elemen.length - 1).classList.add("item1");
    elemen.item(elemen.length - 1).classList.remove("d-none");
  } else {
    elemen.item(IndexElemenSebelumnyaSekarang).classList.add("item1");
    elemen.item(IndexElemenSebelumnyaSekarang).classList.remove("d-none");
  }
}

export function checklengthParagraphPorto() {
  const paragaphContainer = $(".flip-card-back");
  let tinggiElemen = 0;
  let setengahTinggiElemen = 0;

  $.each(paragaphContainer, (index, valueContainer) => {
    $.each(valueContainer.children, (i, valueChild) => {
      tinggiElemen += valueChild.offsetHeight;

      if (valueContainer.children.length - 1 === i && tinggiElemen <= 49) {
        setengahTinggiElemen = tinggiElemen * 0.9;

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);
      }

      if (valueContainer.children.length - 1 === i && tinggiElemen >= 50 && tinggiElemen <= 249) {
        setengahTinggiElemen = tinggiElemen * 0.35;

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);
      }

      if (valueContainer.children.length - 1 === i && tinggiElemen >= 255) {
        setengahTinggiElemen = tinggiElemen * 0.04;

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);
      }
    });
  });
}

export function generateTahunSekarang() {
  const elemenMuncul = document.getElementById("tahun-sekarang");

  elemenMuncul.innerHTML = new Date().getFullYear();
}

export function hideUnhideNav() {
  const navElemen = document.querySelector("header nav");
  const lebarLayar = $(window).width();

  if (lebarLayar > 576) {
    navElemen.classList.toggle("unhideNav");
    $(".fa-bars-staggered").toggle(100);
    $(".fa-bars").toggle(100);
  } else if (lebarLayar <= 576) {
    const headerElement = document.querySelector("header");

    headerElement.classList.toggle("nav-open");
    $(".fa-bars-staggered").toggle(100);
    $(".fa-bars").toggle(100);
  }
}

export function smoothScroll(elemen, e) {
  e.preventDefault();

  const href = $(elemen).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
}

export function expandViewPortoList() {
  let elements = document.getElementsByClassName("card-porto");

  $.each(elements, (index, elemen) => {
    if (elemen.classList.contains("d-none")) {
      $(elemen).toggle(100);
    }
  });

  $("#expand-porto-btn")
    .children()
    .each((index, elemen) => {
      $(elemen).toggle();
    });
}

export function changeSizeHumbergerMenu() {
  $(".humberger-menu")
    .children()
    .each((index, elemen) => {
      if (elemen.classList.contains("fa-bars")) {
        elemen.classList.remove("fa-2xl");
        elemen.classList.add("fa-xl");
      }

      if (elemen.classList.contains("fa-bars-staggered")) {
        elemen.classList.remove("fa-2xl");
        elemen.classList.add("fa-xl");
      }
    });
}

// export single
// export { nextPorto, previousPorto, checklengthParagraphPorto };
