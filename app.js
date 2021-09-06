window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        var header = document.getElementsByClassName('header-front')[0]        
        var footer = document.getElementsByClassName('footer')[0]
        var photo = document.getElementsByClassName('photo-Ana')[0]
        header.style.backdropFilter = "blur(0rem)";
        footer.style.opacity = "1"
        photo.style.left = "200%"
        
    } else {
        header.style.backdropFilter = "blur(0.7rem)";
    }
}