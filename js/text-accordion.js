/**
 * Created by usuario on 19/10/2017.
 */
var acc = document.getElementsByClassName("accordion");
var j;

for (j = 0; j < acc.length; j++) {
    acc[j].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

var acc = document.getElementsByClassName("accordionazul");
var j;

for (j = 0; j < acc.length; j++) {
    acc[j].onclick = function() {
        this.classList.toggle("active");
        var panelazul = this.nextElementSibling;
        if (panelazul.style.maxHeight){
            panelazul.style.maxHeight = null;
        } else {
            panelazul.style.maxHeight = panelazul.scrollHeight + "px";
        }
    }
}