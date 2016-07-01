var $$ = function(selector) {
    return Array.from(document.querySelectorAll(selector));
}

$$('.m-article > h2, .m-article > h3').forEach(function($heading) {
    $heading.innerHTML = '<a href="#' + $heading.id + '">' + $heading.innerText + '</a>';
});

// 在模板中添加console
(function() {
    var supr = RGUI.Component.prototype.config;
    RGUI.Component.prototype.config = function() {
        this.data.console = console;
        return supr.call(this);
    }
})();
