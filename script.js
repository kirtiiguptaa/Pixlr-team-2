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
        document.getElementById("aspect-icon").setAttribute('class', AspectIcon + selectedValue);
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
        document.getElementById('style-type-img').removeAttribute("hidden");
        document.getElementById('style-type-img').setAttribute('src','images/'+selectedValue+'.webp');
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
        document.getElementById('color-type-img').removeAttribute("hidden");
        document.getElementById('color-type-img').setAttribute('src','images/'+selectedValue+'.webp');
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
        document.getElementById('lighting-type-img').removeAttribute("hidden");
        document.getElementById('lighting-type-img').setAttribute('src','images/'+selectedValue+'.webp');
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
        document.getElementById('composition-type-img').removeAttribute("hidden");
        document.getElementById('composition-type-img').setAttribute('src','images/'+selectedValue+'.webp');
    });
});


// price

  <script>
      

        function month()
        {
            document.querySelectorAll("#m1,#m2,#m3").forEach(element => {
                element.classList.remove("price-dnone")
            });;
            document.querySelectorAll("#y1,#y2,#y3").forEach(element => {
                element.classList.add("price-dnone");
            });
            console.log("helll");
        }
      
        function year()
        {
            document.querySelectorAll("#m1,#m2,#m3").forEach(element => {
                element.classList.add("price-dnone")
            });;
            document.querySelectorAll("#y1,#y2,#y3").forEach(element => {
                element.classList.remove("price-dnone");
            });
          console.log("year");

            }
        </script>
