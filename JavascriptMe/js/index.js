window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

    //Cibler boutons "empty".
    //Par défaut, le formulaire d'inscription ne s'affiche pas, mais c'est le cas pour le formulaire de connexion.
    //Si l'utilisateur clique sur le bouton "sign up", 
    //alors le formulaire avec l'id "register-form" doit apparaître (être mis en display: block),
    //et le formulaire "connexion" doit disparaître (être mis en display: none).
    //Si l'utilisateur clique sur le bouton "log in", 
    //alors le formulaire avec l'id "connexion-form" doit apparaître (être mis en display: block),
    //et le formulaire "register" doit disparaître (être mis en display: none).

    //* 1ère version *

    //let empty =  document.getElementById("square-button-empty").onclick = function();

    //if (empty == true) {
    //document.getElementById("register-form").style.display = "block";
    //};   

    //if (empty == true) {
    //document.getElementById("connexion-form").style.display = "none";
    //};

        //* 1ère version bis *

    //let empty = document.querySelectorAll("square-button-empty")[0].onclick = function();

    //if (empty == true) {
    //document.getElementById("register-form").style.display = "block";
    //};   

    //if (empty == true) {
    //document.getElementById("connexion-form").style.display = "none";
    //};


    //* 2ème version *

    //let empty = document.getElementById("square-button-empty");

    //let registerform = document.getElementById("register-form");
    //let connexionform = document.getElementById("connexion-form");

    //empty.addEventListener("click", () => {
          //if(getComputedStyle(registerform).display != "none"){
          //registerform.style.display = "none";
        //} else {
          //registerform.style.display = "block";
        //}
      //})

      document.querySelectorAll('button.square-button-empty')[0].onclick = function() {
          document.getElementById('register-form').style.display = "flex";
          document.getElementById('connexion-form').style.display = "none";
      }

      document.querySelectorAll('button.square-button-empty')[1].onclick = function() {
        document.getElementById('register-form').style.display = "none";
        document.getElementById('connexion-form').style.display = "flex";
    }





    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

            var fieldUser = document.("text");
            var fieldPassword = document.getElementByType("password");

            document.querySelectorAll('button.square-button')[1].onclick = function verifUserLength()
            {
                if (fieldUser.length < 5 )
                {
                    alert("Votre nom d'utilisateur doit contenir 5 lettres au minimum.");
                    return false;
                }
                else
                {
                    return true;
                }
            }

            document.querySelectorAll('button.square-button')[1].onclick = function verifPasswordLength()
            {
                if (fieldPassword.length < 8 )
                {
                    alert("Votre nom d'utilisateur doit contenir 8 lettres au minimum.");
                    return false;
                }
                else
                {
                    return true;
                }
            }

            document.querySelectorAll('button.square-button')[1].onclick = function verifPasswordMaj()
            {
               if (/[A-Z]/.test(fieldPassword))
                {
                    alert("Votre mot de passe doit contenir au moins une majuscule.");
                    return false;
                }
                else
                {
                    return true;
                }

            }

            document.querySelectorAll('button.square-button')[1].onclick = function verifPasswordInt ()

            {
                if (/[123456789]/.test(fieldPassword))
                    {
                        alert("Votre mot de passe doit contenir au moins un nombre entier.");
                        return false;
                    }
                    else
                    {
                        return true;
                    }
            }






    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user' en utilisant la method stringify de l'objet JSON





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


}
