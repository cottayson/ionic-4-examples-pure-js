const courseNameInput = document.getElementById('input-course-name')
const courseRatingInput = document.getElementById('input-course-rating')
const addButton = document.getElementById('btn-add')
const courseList = document.getElementById('course-list')
const alertController = document.querySelector('ion-alert-controller')

function isValidRating(rating) {
  return rating >= 1 && rating <= 5
}

addButton.addEventListener('click', () => {
  const enteredCourseName = courseNameInput.value
  const enteredCourseRating = courseRatingInput.value

  if (
    enteredCourseName.trim().length === 0 ||
    enteredCourseRating.trim().length === 0 ||
    !isValidRating(enteredCourseRating)
  ) {
    alertController.create({
      header: 'Invalid input',
      message: 'Please enter a valid course name and rating',
      buttons: ['Okay']
    }).then( alertElement => alertElement.present() )
    return
  }

  const newItem = document.createElement('ion-item')
  newItem.innerHTML = `<strong>${enteredCourseName}:</strong> &nbsp ${enteredCourseRating}/5`
  courseList.appendChild(newItem)
})