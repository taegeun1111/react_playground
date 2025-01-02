

$("p").removeClass("myClass noClass").addClass("yourClass");

$(["p", "t"]).text("hello");

const tag = $("ul li").addClass('hello').addClass(function (index) {
  return "item-" + index;
});

$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data("name") + "입니다";
});

import * as $ from 'jquery';
import $ = require('jquery');

// tsconfig.json의 esModuleInterop: true
import $ from 'jquery';

export default $; // esmodule
export = $; // commonjs