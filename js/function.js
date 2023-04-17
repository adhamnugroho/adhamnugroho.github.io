const nextPorto = () => {
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
};

const previousPorto = () => {
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
};

const checklengthParagraphPorto = () => {
  const paragaphContainer = $(".flip-card-back");
  let tinggiElemen = 0;
  let setengahTinggiElemen = 0;

  $.each(paragaphContainer, (index, valueContainer) => {
    $.each(valueContainer.children, (i, valueChild) => {
      tinggiElemen += valueChild.offsetHeight;

      if (valueContainer.children.length - 1 === i && tinggiElemen <= 49) {
        setengahTinggiElemen = tinggiElemen * 0.9;
        console.log(setengahTinggiElemen);

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);

        console.log(valueContainer.children.item(0));
      }

      if (valueContainer.children.length - 1 === i && tinggiElemen >= 50 && tinggiElemen <= 249) {
        setengahTinggiElemen = tinggiElemen * 0.35;
        console.log(setengahTinggiElemen);

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);

        console.log(valueContainer.children.item(0));
      }

      if (valueContainer.children.length - 1 === i && tinggiElemen >= 255) {
        setengahTinggiElemen = tinggiElemen * 0.04;
        console.log(setengahTinggiElemen);

        $(valueContainer).children("p:first-child").css("margin-top", setengahTinggiElemen);
        $(valueContainer).children("p:last-child").css("margin-bottom", setengahTinggiElemen);

        console.log(valueContainer.children.item(0));
      }

      console.log(tinggiElemen);
    });
  });
};

// eksport
module.exports = { nextPorto, previousPorto, checklengthParagraphPorto };
