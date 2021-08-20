
document.getElementById('top-players heading').style.color = '#ff0000d4'
document.getElementById('top-blogs-heading').style.color = 'rgb(255 25 55 / 93%)';


//as we are trying to change the elements that that contain a particular class, we need arrays. (As there are multiple elements)

const elements = document.getElementsByClassName('top-players');

for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = 'rgb(8 3 49 / 27%)';
}


document.getElementById('Course-add-button').addEventListener('click', function () {
  const courseList = document.getElementById('course-list')
  const list = document.createElement('li');
  list.innerText = 'course - added';
  courseList.appendChild(list);

})
