const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header-nav');

hamburger.addEventListener('click', function(){
    navigation.classList.toggle('visibility');
})