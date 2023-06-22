const likes = document.getElementsByClassName('fa-heart');
Array.from(likes).forEach((elem) => {
  elem.addEventListener('click', () => {
    if (elem.classList.contains('fa-regular')) {
      elem.classList.remove('fa-regular');
      elem.classList.add('fa-solid');
      elem.style.color = 'red';
    } else {
      elem.classList.add('fa-regular');
      elem.classList.remove('fa-solid');
      elem.style.color = '#71767B';
    }
  });
});
