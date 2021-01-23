const cert = document.getElementById("certificates");
let open_cert = -1;
cert.style.display = "none";
let valueMode = 1;

function expandProjects() {
  document.getElementById("dropdown").style.display = "block";
}

function shrinkProjects() {
  document.getElementById("dropdown").style.display = "none";
}

const dayNightToggle = document.getElementById("dayNightToggle");
dayNightToggle.addEventListener("click", dayNightChanger);

function dayNightChanger() {
  const mainContainer = document.querySelector(".main");
  valueMode ^= 1;

  if (valueMode) {
    // day mode
    mainContainer.classList.remove("day");
  } else {
    mainContainer.classList.add("day");
  }
}

var show_more = -1;
function moreLed() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreLed");

  if (show_more == -1) {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    show_more = show_more ^ 1;
  } else {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    show_more = show_more ^ 1;
  }
}

function showCert() {
  if (open_cert == -1) {
    cert.style.display = "block";
    open_cert = open_cert ^ 1;
  } else {
    cert.style.display = "none";
    open_cert = open_cert ^ 1;
  }

  document.getElementById("id1").innerHTML =
    '<div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/machine_learning.png" alt="certificate machine learning" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/deep_learning_specialisation.png" alt="certificate deep learning specialization" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/neural_networks_and_deep_learning.png" alt="certificate neural networks & deep learning" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/improving_deep_neural_networks.png" alt="certificate improving deep neural networks" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/structuring_machine_learning_projects.png" alt="certificate structuring machine learning projects" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/convolutional_neural_networks.png" alt="certificate convolutional neural networks" style="width:100%"> </div> <div class="col-md-6 col-lg-4 col-12 thumbnail"> <img src="images/certificates/sequence_models.png" alt="certificate sequence models" style="width:100%"> </div>';
}