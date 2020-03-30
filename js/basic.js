var today_cards = [
  [
    "Headline",
    "Subline",
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ],
  [
    "Headline1",
    "Subline1",
    "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ]
];

var technology_cards = [
  [
    "Headline",
    "Subline",
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ],
  [
    "Headline1",
    "Subline1",
    "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ]
];

var future_cards = [
  "https://images.unsplash.com/photo-1536626064922-49e65368b27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

function random(list) {
  var random_item = list[Math.floor(Math.random() * list.length)];
  return random_item; // The function returns the product of p1 and p2
}

$("#shuffle").click(function() {
  console.log("here we go");
  var today_card = random(today_cards);
  var technology_card1 = random(technology_cards);
  var technology_card2 = random(technology_cards);
  var technology_card3 = random(technology_cards);
  $("#today").css("background-image", "url(" + today_card[2] + ")");
  $("#today_headline").text(today_card[0]);
  $("#today_subline").text(today_card[1]);
  $("#technology1").css("background-image", "url(" + technology_card1[2] + ")");
  $("#technology1_headline").text(technology_card1[0]);
  $("#technology1_subline").text(technology_card1[1]);
  $("#technology2").css("background-image", "url(" + technology_card2[2] + ")");
  $("#technology2_headline").text(technology_card2[0]);
  $("#technology2_subline").text(technology_card2[1]);
  $("#technology3").css("background-image", "url(" + technology_card3[2] + ")");
  $("#technology3_headline").text(technology_card3[0]);
  $("#technology3_subline").text(technology_card3[1]);
  $("#tomorrow").css("background-image", "url(" + random(future_cards) + ")");
});

$('a[href^="#"]').on("click", function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top
      },
      900,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
});
