    llibres = 0;

    class Llibre{
        constructor(títol, autor, disponible){
            this.títol = títol;
            this.autor = autor;
            this.disponible = disponible;{
                if (llibres > 0){
                    disponible = true
                }
                else {
                    disponible = false
                }
            }
        }

        prestar(Llibre){
            if (disponible = true){
                Llibre (llibres - 1);
            }
        }

        retornar(Llibre){
             if (disponible = true){
                Llibre (llibres + 1);
            }
        }
    }

    class Soci{
        constructor(nom, llibres_prestats){
            this.nom = nom;
            this.llibres_prestats = llibres_prestats(llista);
        }

        agafar_llibre(Llibre){
            if (disponible = true) {
                Llibre (llibres - 1);
            }
        }

        tornar_llibre(Llibre){
             if (disponible = true){
                Llibre (llibres + 1);
            }
        }
    }

    class Biblioteca{
        constructor(Llibres, Socis){
            this.Socis = Socis(Soci);
            this.Llibres = Llibres(Llibre);
        }

        afegir_libre(Llibre){
            if (Llibre > 0){
                this.Llibres += Llibre;
            }
        }

        registrar_soci(Soci){
            if (Soci > 0){
                this.Socis += Soci;
            }
        }

        prestar_llibre(Llibre){
            if (disponible = true){
                Llibre (llibres - 1);
            }
        }
    }