var typed = new Typed("#text", {
  strings: [
    "One Year Of Friendship",
    "365 Days Of Friendship",
    "Unbreakable Bond",
    "12 Months of Magic Moments",
    "One Year Down, Forever to Go",
    "From Day One to Year One",
    "The Beginning of a Beautiful Journey",
    "One Year, One Amazing Bond",
    "One Year, No Regrets (Mostly)",
    "Survived Each Other for a Year",
    "A Year of Trust, Laughter, and Love",
    "One Year, Forever Grateful",
  ],
  typeSpeed: 100,
  backspeed: 50,

  loop: true,
});

function activateTab(tabButton) {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".content");

  // Remove active classes from all buttons and contents
  buttons.forEach((btn) => btn.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  // Add active class to the clicked button and its corresponding content
  tabButton.classList.add("active");
  const contentId = tabButton.getAttribute("data-tab");
  document.getElementById(contentId).classList.add("active");
}
 /*function activateTab(button) {
        // Remove the 'active' class from all tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked button
        button.classList.add('active');

        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Show the corresponding tab content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    }*/


const details = [
  {
    img: "p1.jpg",
    name: "NIMMAKAYALA NAVEEN KUMAR REDDY",
    dob: " 27 - Jan - 2003",
    bphotos:
      "https://drive.google.com/drive/folders/123nmHS-obAxnpX0BxAwiuDoedrx7mH12",
    Address: "singanapalli,Nellore.",
    live: "https://maps.app.goo.gl/mF5Z1anvvC9JmJxL7",
    branch: "EEE",
  },
  {
    img: "p2.jpg",
    name: "DERANGULA REDDI SAI",
    dob: " 19 - Nov - 2003",
    bphotos:
      "https://drive.google.com/drive/folders/124mWct1bMXbMpk_k2JWMAYQnfhNqFmxS",
    Address: "Madhanapalli.",
    live: "https://maps.app.goo.gl/x896Dyec3PN62Zk49?g_st=aw",
    branch: "EEE",
  },
  {
    img: "p3.jpg",
    name: "VELLALA NITHIN KUMAR REDDY",
    dob: " 17 - Jan - 2004",
    bphotos:
      "https://drive.google.com/drive/folders/19BgVh1B1f2dw1F4xO0NcstzsQ6Ve9Aas",
    Address: "Kondapuram,Kadapa.",
    live: "https://maps.app.goo.gl/y7FVtGfJKoFWr5Hr8",
    branch: "EEE",
  },
  {
    img: "p4.jpg",
    name: "BEJADA ANJALI",
    dob: " 08 - Apr - 2004",
    bphotos:
      "https://drive.google.com/drive/folders/190EKiI4ir1CM6FJkz4XiNiuTr8unjxL4",
    Address: "Tirupati.",
    live: "https://maps.app.goo.gl/Hmvb2V3wBt3iKJ188",
    branch: "EEE",
  },
  {
    img: "p5.jpg",
    name: "SEELAM SNEHA LATHA REDDY",
    dob: " 28 - Dec - 2003",
    bphotos:
      "https://drive.google.com/drive/folders/190FNH9zth8OHmda4I4QOWo_TQZKmjmf4",
    Address: "Jammalamadugu.",
    live: "https://maps.app.goo.gl/eJnSaD9KiERaXwTPA",
    branch: "CSE",
  },
  {
    img: "p6.jpg",
    name: "DADIREDDY KAVYA",
    dob: " 29 - Feb - 2004",
    bphotos:
      "https://drive.google.com/drive/folders/19A26rTBkNQEECi8EpDK9lEHFRvGuvE6v",
    Address: "Proddatur.",
    live: "https://maps.app.goo.gl/trMXq3Ae7sBX6ocE9",
    branch: "AI&DS",
  },
  {
    img: "p7.jpg",
    name: "AMMULYA REDDY",
    dob: " 24 - Sep - 2003",
    bphotos:
      "https://drive.google.com/drive/folders/127fUAOwU5rm65J4AzqPWvqEYU0u57AWM",
    Address: "Kamalapuram.",
    live: "https://maps.app.goo.gl/jbWJ2pTymjQMCHWv9",
    branch: "EEE",
  },
];
let profiles = "";
details.forEach((detail) => {
  profiles += `
        <div class="profile-card">
          <img src="${detail.img}" alt="${detail.name}">
          <h3>${detail.name}</h3>
          <p><span>Date of Birth:</span>${detail.dob}</p> 
          <p>( <a href="${detail.bphotos}" target="_blank">  Birthday Photos</a>) ! Add or view your Bday photos by clicking link?</p>
          <p><span>Address:</span>${detail.Address}</p>
          <p>  <span>Live location:</span><a href=" ${detail.live} "> Visit</a></p>
          <P><span>Batch</span>:2021-2025(<span class="batch"> ${ detail.branch } </span>)</P>
        </div>
        `;
});
document.getElementById("profiles").innerHTML = profiles;

function togglePhotos(button) {
  const card = button.closest(".trip-card");
  const photoGrid = card.querySelector(".photo-grid");
  const seeAllButton = card.querySelector(".see-all-button");
  const seeAllButtonvid = card.querySelector(".see-all-button1");

  if (photoGrid.style.display === "grid") {
    photoGrid.style.display = "none";
    seeAllButton.style.display = "none";
    seeAllButtonvid.style.display = "none";
  } else {
    photoGrid.style.display = "grid";
    seeAllButton.style.display = "inline-block";
    seeAllButtonvid.style.display = "inline-block";
  }
}
const img = [
  { imgs: "1.jpg" },
  { imgs: "2.jpg" },
  { imgs: "3.jpg" },
  { imgs: "4.jpg" },
  { imgs: "5.jpg" },
  { imgs: "6.jpg" },
];
let gallery = "";
img.forEach((image) => {
  gallery += `
      <div class="gallery">
      <img src="random/${image.imgs}" alt="Photo">
      </div>
      `;
});
document.querySelector(".gallery").innerHTML = gallery;
function showGif() {
  const gifContainer = document.getElementById("gifContainer");
  const tripContent = document.getElementById("trips");

  gifContainer.style.display = "block";
  tripContent.style.display = "none";

  setTimeout(() => {
    gifContainer.style.display = "none";
    tripContent.style.display = "block";
  }, 5000); // 5 seconds
}

