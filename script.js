document.getElementById("generator-positive").addEventListener("click", function() {

    var minimizedElements = document.querySelectorAll('.minimized');

    minimizedElements.forEach(function(element) {
        element.classList.remove('minimized');
    });
    var button = document.getElementById("generator-generate");
    button.textContent = "Sign up / Log in";
});

document.querySelectorAll('.aspect').forEach(function(option) {
    option.addEventListener('click', function() {

        document.querySelectorAll('.aspect').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        this.classList.add('selected');

        const selectedValue = this.getAttribute('data');
        // console.log('Selected lighting option:', selectedValue);
        var AspectIcon = "aspect-";

        document.getElementById("aspect-type-label").innerHTML = selectedValue;
        // 
        console.log( AspectIcon + selectedValue);
        document.getElementById("aspect-type-label").setAttribute('class', AspectIcon + selectedValue);
    });
});

document.querySelectorAll('.style-select').forEach(function(option) {
    option.addEventListener('click', function() {

        document.querySelectorAll('.style-select').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        this.classList.add('selected');

        const selectedValue = this.getAttribute('data');
        console.log('Selected lighting option:', selectedValue);
        document.getElementById("style-type-label").innerHTML = selectedValue;
    });
});

document.querySelectorAll('.color-selected').forEach(function(option) {
    option.addEventListener('click', function() {

        document.querySelectorAll('.color-selected').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        this.classList.add('selected');

        const selectedValue = this.getAttribute('data');
        console.log('Selected lighting option:', selectedValue);
        document.getElementById("color-type-label").innerHTML = selectedValue;
    });
});

document.querySelectorAll('.light-selected').forEach(function(option) {
    option.addEventListener('click', function() {

        document.querySelectorAll('.light-selected').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        this.classList.add('selected');

        const selectedValue = this.getAttribute('data');
        console.log('Selected lighting option:', selectedValue);
        document.getElementById("lighting-type-label").innerHTML = selectedValue;
    });
});

document.querySelectorAll('.composition-selected').forEach(function(option) {
    option.addEventListener('click', function() {

        document.querySelectorAll('.composition-selected').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        this.classList.add('selected');

        const selectedValue = this.getAttribute('data');
        console.log('Selected lighting option:', selectedValue);
        document.getElementById("composition-type-label").innerHTML = selectedValue;
    });
});