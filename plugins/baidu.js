export default defineNuxtPlugin(() => {
  if (process.client) {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?97171b6e4c6a0fcb2b1e215c700886fe";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  }
});
