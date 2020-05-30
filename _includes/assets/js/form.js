const Form = function Form() {
    this.form = null;
    this.visible = false;
    this.constructor();
};

Form.prototype.constructor = function() {
    this.form = document.querySelector('.form-container');

    if (this.form) {
        this.form.addEventListener('click', (event) => {
            if (!event.target.closest(`form[name="${NAME_FORM}"]`)) {
                this.onVisibleForm();
            }
        });
    }
};

Form.prototype.onVisibleForm = function () {
    this.visible = !this.visible;
    if (this.visible) {
        this.form.classList.add('visible');
    } else {
        this.form.classList.remove('visible');
    }
};

const NAME_FORM = 'contact';
const form = new Form();

const onClickHireMe = function onClickHireMe() {
    form.onVisibleForm();
};
