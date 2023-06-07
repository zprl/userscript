//
const add_inner = function () {
  const element = document.querySelector("#header > div");
  element.innerHTML += `<label id="pl"><input style="" id="chin" type="checkbox" onclick="delete_line">ts</label>`;
  document.querySelector("#chin").style.cssText =
    "cursor:pointer;width:30px;height:30px;position:relative;";
};
const q_lick = (selector) => {
  document.querySelector(selector).click();
  console.log(selector, "//qlicked//");
};
const delete_line = () => {
  console.log("Start to delete");
  while (document.querySelector("#chin").checked === true) {
    q_lick(
      "#__next > div > main > div.listLayout_home_list_wrap__2URon.listLayout_type_center__pXhQY > div.feedListLayout_feed_list__FyxQT > article:nth-child(10) > div.postHeaderLayout_post_header___tu5E > div.postButtonLayout_post_button_wrap__v8E6p > div > button > i"
    );
    q_lick("")
  }
};
//
//
//
//

//aaaa
