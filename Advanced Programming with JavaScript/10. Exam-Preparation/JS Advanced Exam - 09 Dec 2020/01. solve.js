function solution() {
   const coursesPrices = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490,
   }
   const print = {
      'js-fundamentals': 'JS-Fundamentals',
      'js-advanced': 'JS-Advanced',
      'js-applications': 'JS-Applications',
      'js-web': 'JS-Web',
   }
   const signUpButton = document.querySelector('button');


   signUpButton.addEventListener('click', e => {
      e.preventDefault();
      const ulToRemove = document.querySelector('#myCourses ul');
      const divCourses = ulToRemove.parentNode;
      divCourses.removeChild(divCourses.firstElementChild);
      const ulClean = document.createElement('ul');
      divCourses.appendChild(ulClean);
      const ulElement = document.querySelector('#myCourses ul');

      const coursesCheckbox = Array.from(document.querySelectorAll('.courseBody li input'));
      const onlineCheckbox = Array.from(document.querySelectorAll('#educationForm input'));
      const courses = [];
      let price = 0;
      coursesCheckbox.forEach(element => {
         if (element.checked) {
            courses.push(element.value);
         }
      });
      if (onlineCheckbox[1].checked) {
         for (const [key, value] of Object.entries(coursesPrices)) {
            coursesPrices[key] *= 0.94;
         }
      }

      if (courses.includes('js-advanced') && courses.includes('js-fundamentals')) {
         coursesPrices['js-advanced'] *= 0.9;
      }
      let discounts = 0;

      if (courses.includes('js-advanced') && courses.includes('js-fundamentals') && courses.includes('js-applications')) {
         discounts = (coursesPrices['js-advanced'] + coursesPrices['js-applications'] + coursesPrices['js-fundamentals']);
      }



      const priceElements = document.querySelector('.courseFoot p');

      if (discounts !== 0) {
         if (courses.includes('js-web')) {
            price += parseInt((discounts * 0.94) + coursesPrices['js-web']);

            for (const [key, value] of Object.entries(print)) {
               const liElements = document.createElement('li');
               liElements.textContent = value;
               ulElement.appendChild(liElements);
            }
            const liElements = document.createElement('li');
            liElements.textContent = 'HTML and CSS';
            ulElement.appendChild(liElements);

            priceElements.textContent = `Cost: ${price.toFixed(2)} BGN`;
         } else {
            price += parseInt(discounts * 0.94);
            courses.forEach(course => {
               const liElements = document.createElement('li');
               liElements.textContent = print[course];
               ulElement.appendChild(liElements);
            });
            priceElements.textContent = `Cost: ${price.toFixed(2)} BGN`;
         }
      } else {
         courses.forEach(course => {
            price += coursesPrices[course];
         });
         price = parseInt(price);
         courses.forEach(course => {
            const liElements = document.createElement('li');
            liElements.textContent = print[course];
            ulElement.appendChild(liElements);
         });
         priceElements.textContent = `Cost: ${price.toFixed(2)} BGN`;
      }
      coursesCheckbox.forEach(box => {
         box.checked = false;
      });
   })
}

// solution();