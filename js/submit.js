document.addEventListener('DOMContentLoaded', () => {
    const projectsSubmitBtn = document.querySelector('.projects-content-submit-button');
    const subscribePopup = document.querySelector('.submit-popup');
    const finishSubmit = document.querySelector('.finish-submit');
    const subscribePopupCloseBtn = document.querySelector('.submit-popup-close');
    const subscribePopupForm = document.querySelector('.submit-popup-form');
    const subscribePopupFormInputs = document.querySelectorAll('.submit-popup-form-input input');
    const subscribePopupFormButton = document.querySelector('.submit-popup-form-button');

    let formData = {
        name: '',
        email: ''
    };

    const collectFormData = (name, email) => {
        formData.name = name;
        formData.email = email;
    };

    const validate = (value, field) => {
        if (field === 'name') {
            let regUserName = /^[a-zA-Z0-9]{3,12}$/;
            return regUserName.test(value) ? true : false;
        } else if (field === 'email') {
            let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return regEmail.test(value) ? true : false;
        } else {
            return false;
        }
     }

    projectsSubmitBtn.addEventListener('click', () => {
        subscribePopup.style.display = 'flex';
        setTimeout(() => {
            subscribePopupCloseBtn.style.opacity = 1;
            subscribePopup.style.opacity = 1;
        }, 100);
    });

    subscribePopupCloseBtn.addEventListener('click', () => {
        subscribePopup.style.opacity = 0;
        setTimeout(() => {
            subscribePopup.style.display = 'none';
        }, 500);
    });

    subscribePopupForm.addEventListener('input', e => {
        if (e.target.id === 'name') {
            subscribePopupForm.querySelector('.submit-popup-form-error-name').style.opacity = 0;
            if (validate(e.target.value, e.target.id) === false) {
               subscribePopupForm.querySelector('.submit-popup-form-error-name').style.opacity = 1;     
            }
        }

        if (e.target.id === 'email') {
            subscribePopupForm.querySelector('.submit-popup-form-error-email').style.opacity = 0;
            if (validate(e.target.value, e.target.id) === false) {
                subscribePopupForm.querySelector('.submit-popup-form-error-email').style.opacity = 1;        
            }
        }
    });

    subscribePopupFormButton.addEventListener('click', () => {
        let name = subscribePopupFormInputs[0].value;
        let email = subscribePopupFormInputs[1].value;

        if(validate(name, 'name') && validate(email, 'email')) {
            collectFormData(name, email);
            subscribePopupCloseBtn.style.opacity = 0;
            finishSubmit.querySelector('h3').innerHTML = `Thank you, ${formData.name} for submit!`;
            finishSubmit.querySelector('p').innerHTML = `A message will be sent to your email ${formData.email}.`;
            finishSubmit.style.opacity = 1;
            finishSubmit.style.zIndex = 20;
            
            setTimeout(() => {
                subscribePopup.style.opacity = 0;
                setTimeout(() => {
                    subscribePopup.style.display = 'none';
                    finishSubmit.style.opacity = 0;
                    finishSubmit.style.zIndex = -1;
                    finishSubmit.querySelector('h3').innerHTML = '';
                }, 500);
            }, 3000)
        }
    });
});