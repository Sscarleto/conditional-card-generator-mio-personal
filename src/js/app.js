import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */

function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let instagram = "";
  if (variables.instagram) {
    instagram = `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;
  }
  let twitter = "";
  if (variables.twitter) {
    twitter = `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
  }
  let linkedin = "";
  if (variables.linkedin) {
    linkedin = `<li><a href="https://linkedin.com/${variables.linkedin}"><i class="fa-brands fa-linkedin"></i></a></li>`;
  }
  let github = "";
  if (variables.github) {
    github = `<li><a href="https://github.com/${variables.github}"><i class="fa-brands fa-github"></i></a></li>`;
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "NAME"},
          ${variables.lastname || "LAST NAME"}</h1>
          <h2>${variables.role ? variables.role : ""}</h2>
          <h3>${variables.city || "CITY"}, ${variables.country ||
    "COUNTRY"}</h3>
          <ul class="${variables.socialMediaPosition}">
            ${twitter}
            ${github}
            ${linkedin}
            ${instagram}
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://wallpapers.com/images/featured/k2475ozowx4qo6bv.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/273931160_2060326520792608_7880746840275247697_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uJT0fhOzCtUAX-5Jt_q&_nc_oc=AQm4U4ooniLnyR73E_yN9WxW5Kmmxfsw8rutgZGANzW9TQCJsBISHpf6CqrGslhY83I&_nc_ht=scontent-mia3-1.xx&oh=00_AfAJQQoZk9taHLBkCOzHqqqU6p_EZewthpKaIVj8XbRPyA&oe=640268EE",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
