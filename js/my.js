/* Progress */
let bars = document.getElementsByClassName("progress-bar");
let titles = document.getElementsByClassName("progress-title");
for(let i=0;i<bars.length;i++){
    bars[i].style.width = bars[i].dataset.progress + "%";
    titles[i].innerHTML = bars[i].style.width;
    titles[i].style.marginLeft = (bars[i].dataset.progress-bars[i].dataset.progress/8)+"%";
}
/* btn */
function return_item(el) {
    el.classList.remove('return');
    el.classList.add('delete');
    el.innerText = "Удалить";
    el.parentNode.parentNode.removeAttribute('disabled');
    el.removeAttribute('onclick');
    el.setAttribute("onclick","delete_item(this)");
}
function delete_item(el) {
    el.classList.remove('delete');
    el.classList.add('return');
    el.innerText = "Вернуть";
    el.parentNode.parentNode.setAttribute('disabled','true');
    el.removeAttribute('onclick');
    el.setAttribute("onclick","return_item(this)");
}
/* btn-count */
let counts = document.getElementsByClassName("count");
let decrements = document.querySelectorAll(".btn-count[value='-']");
let increments = document.querySelectorAll(".btn-count[value='+']");
for(let i=0;i<counts.length;i++){
    if(counts[i].innerText==='1')
        decrements[i].setAttribute('disabled','true');
    increments[i].onclick = function () {
        decrements[i].removeAttribute('disabled');
        counts[i].innerText = +(counts[i].innerText)+1;
    };
    decrements[i].onclick = function () {
        counts[i].innerText = +(counts[i].innerText)-1;
        if(counts[i].innerText==='1')
            decrements[i].setAttribute('disabled','true');
    }
}