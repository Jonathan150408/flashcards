# Flashcards

## Objectifs

### Pédagogiquement

> Ce projet vise surtout à augmenter et travailler les compétences avec le célèbre framework Adonis. Au cours de ce projet, nous avons accès à de la documentaion fournie par l'ETML et à la documentation et ligne comprenant donc les IAs, leur utilisation au cous de ce projet est détaillée dans le chapitre **Stratégie et utilisation de l'IA**.
> <br> Il sera donc vital de comprendre le fonctionnement de Adonis et l'application du schéma MVC.

#### Schema MVC

> Le schema _Model-View-Controller_ est une représentation visuelle du fonctionnement de l'application.
> <br><br>Les _Models_ sont des fichiers .ts et sont propres à chaque table de la base de données (pour MySQL en tout cas). Une table possède forcément un modèle. Les modèles sont utilisés lors de la création de la base de données et servent à montrer au gestionnaire de db à quoi ressemble une table. Les modèles déclarent les colonnes de la table et leur spécificités (UNIQUE, PRIMARY, NOT-NULL, ...). On utilise aussi les modèles dans les controlleurs afin de récupérer/insérer/supprimer/modifier des données (opérations CRUD).
> <br><br>Les _Views_ sont des fichiers contenant du HTML (voir CSS ou JS) qui sera affiché lors du rendu de la page. Ces fichiers sont intérpretés par le gestionnaire de template edge. On peut définir les views comme étant le rendu visuel des pages. Les fichiers .edge sont _combinables_, en effet dans ce projet, par exemple, on trouvera un fichier pour le footer, un pour le header, et plein d'autres pour les différente pages.
> <br><br>Enfin les _Controllers_ sont des fichiers en TypeScript et servent à lier le routeur, la récupération des données et le rendu visuel. Un controlleur dispose de plein de méthodes, en voici une que dont on va parler :
>
> ```ts
>   async index({ view }: HttpContext) { //cette méthode s'appelle index
>    const decks = await Deck.query().orderBy('id', 'asc').preload('cards') //ici on va chercher des données en passant par le modèle de deck
>    return view.render('pages/home.edge', { decks }) //ici on retourne un rendu visuel en se servant des views (dont home.edge citée explicitement)
>  }
> ```
>
> Comme nous le voyons et l'expliquent les commentaires ci-dessus, une méthode d'un controlleur fait effectivement le lien entre les données et le rendu. Mais le routeur dans tout ça ? Et bien le routeur est celui qui appelle le controlleur. Comme ceci :
>
> ```ts
> router.get("/", [DecksController, "index"]).as("home");
> ```
>
> Le routeur indique la route (/), le controlleur (DecksController), la méthode du controlleur (index) et le "surnom" de la route (home)

### Du produit

> L'objectif final de ce projet est de fournir une application à l'aide du framework Adonis. L'application permettra de gérer des decks de flashcards utiles à l'apprentissage. Un utilisateur pourra donc créer, modifier, supprimer et réviser ses decks. De plus l'utilisateur aura accès aux cartes de chaque deck et pourra donc les gérer de la même manière (CRUD). L'application, étant liée à une base de données verra ses decks et cartes sauvegardés entre chaque session. Dans notre cas, l'application de départ contient 2 decks et leurs cartes.

## User Stories

> Les points demandés dans les User Stories sont redéfinits dans la partie **Bilan**

## Marche à suivre - installation et utilisation

> Afin de faire fonctionner l'application, il faut commencer par la télécharger (dizziper le zip si nécessaire ou cloner à l'aide de GitHub). Atteingnez ensuite le dossier _src_ et ouvrez un terminal. Lancez la commande `npm i`.
> <br> Pendant ce temps, vous pouvez déjà mettre en place l'environnement Docker. Il vous suffira de trouver le dossier _Docker_MySQL_, ouvrir un terminal et lancer la commande `docker compose up -d`. Cela créera le container et le lancera automatiquement.
> <br> En même temps, nous pouvons mettre en place le fichier **.env**, vous trouverez un fichier **.env.exemple** dans le dossier _src_. Il vous suffira alors de supprimer l'extension _.exemple_ afin de renommer le fichier en _.env_.
> <br> Le permier terminal (celui où vous avez fait `npm i`) devrait avoir fini, dans ce même terminal lancez la commande `node ace make:key`, puis `node ace migration:refresh`. Ces commandes vont, dans l'ordre, générer une clé d'accès à la db, pui remplir la base de données avec des données de test/exemple.
> <br> Dernière étape : dans le terminal du dossier _src_, lancez la commande `npm run dev`. Cela va lancer le serveur et vous pourrez apprécier l'application à [l'adresse suivante](http://localhost:3333/). (http://localhost:3333/ au cas où le lien ne fonctionnerait pas)

## Bilan - résultats vs objectifs

> De manière générale, ce ne fut pas un franc succès, mais ce ne fut pas non plus un échec. J'ai compris comment monter - développer - utiliser Adonis pour mon projet, mais je dois admettre que l'IA m'a été bien plus utile que je ne l'aurais voulu durant ce projet.

### Gestion de la collection de decks

> | Objectif                                                                                                |                                                                     Bilan |
> | :------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------: |
> | Accès aux deck sur la page d'accueil lors de la connection                                              |                                                                   Atteint |
> | Le curseur indique que les decks sont cliquables                                                        |                                                                   Atteint |
> | Cliquer sur ajouter redirige vers le formulaire de création                                             |      Atteint, le bouton ajouter est un logo + dont le fond est bleu clair |
> | L'annulation de la création depuis le formulaire redirige vers home                                     |                                                                   Atteint |
> | Le formulaire permet de créer un nouveau deck                                                           |                                                                   Atteint |
> | Le formulaire ne créé pas de doublons de decks                                                          |                        Atteint, un message d'erreur empêche la validation |
> | Le formulaire ne valide pas si la description est de - de 10 caractères                                 |                           Atteint, un message d'erreur aide l'utilisateur |
> | Sur la homepage cliquer sur un deck redirige vers la page dédié à la présentation du deck               |                                                                   Atteint |
> | Sur la page de visualisation d'un deck, le bouton supprimer affiche un popup de confirmation            | Discutable, confirmation oui mais le "popup" est généré par le navigateur |
> | Si je clique sur annuler lors de la suppression, le deck reste sur la page d'accueil                    |              Discutable, annuler n'existe pas, il faut cliquer sur escape |
> | Après confirmation, le deck est supprimé                                                                |                                                                   Atteint |
> | Le bouton modifier le deck amène vers le formulaire de modification, le formulaire est pré-rempli       |                                                                   Atteint |
> | Si j'enregistre les modifications, le deck est modifié                                                  | Discutable, modification oui, mais impossible de valider avec le même nom |
> | Sur la page de modification cliquer sur annuler ne modifie pas le deck et ramène sur la liste des decks |                                                                   Atteint |

### Gestion de la collection de cartes

> | Objectif                                                                                                |                                                                          Bilan |
> | :------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------: |
> | Sur la page d'un deck, je clique sur ajouter une carte et j'arrive sur la page d'ajout                  |                                                                        Atteint |
> | Le curseur indique que les cartes sur la page d'un deck sont cliquables                                 |                                                                        Atteint |
> | Sur la page d'un deck, cliquer sur une carte amène sur une page dédiée                                  |                                                                        Atteint |
> | Sur la page de visualisation d'une carte, cliquer dessus la retourne                                    |                                                                        Atteint |
> | Sur la page de visualisation d'une carte, je clique sur OK et retourn à la liste des cartes du deck     |                                                                        Atteint |
> | Depuis le formulaire de création d'une carte, abandonner fait revenir sur la liste des cartes           |                                                                        Atteint |
> | Le formulaire de création ajoute la nouvelle carte au deck après confirmation                           |                                                                        Atteint |
> | Le formulaire ne crée pas de doublon de carte (même question)                                           |                                                                        Atteint |
> | Le formulaire ne valide pas les cartes dont la question fait moins de 10 caractère ou réponse vide      |                                                                        Atteint |
> | Si je clique sur annuler lors de la suppression, la carte n'est pas supprimée                           |                   Discutable, annuler n'existe pas, il faut cliquer sur escape |
> | Sur la page de la carte, je clique sur supprimer et un popup apparait pour me demander de confirmer     |      Discutable, confirmation oui mais le "popup" est généré par le navigateur |
> | Sur la page de la carte, je peux accèder au formulaire de modification en cliquant sur modifier         |                                                                        Atteint |
> | Sur la page de modification, cliquer sur abandonner fait revenir à la page de la carte sans la modifier |                                                                        Atteint |
> | Sur la page de modification, la validation du form avec des données ok modifie la carte                 | Discutable, modification oui, mais impossible de valider avec la même question |

### Entrainement et mode de base

> | Objectif                                                                                                                           |                                                 Bilan |
> | :--------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------: |
> | Sur la page showdeck, cliquer sur le bouton exercer affiche la page de lancement de l'exercice                                     |                                               Atteint |
> | Sur la page de choix du mode en mode basique, commencer redirige sur une page qui affiche la première carte du deck                |                                               Atteint |
> | Sur la page de la question, cliquer sur la carte affiche la réponse                                                                |                                               Atteint |
> | Sur la même page réponse affichée, cliquer sur juste ou faux affiche la carte suivante                                             | Atteint, fonctionne aussi si la question est affichée |
> | Sur la dernière carte, cliquer sur juste ou faux amène sur la page des statistiques avec un résultat conforme aux réponses données |                                               Atteint |
> | Depuis la page de fin, cliquer sur OK ramène à la page d’accueil                                                                   |                                               Atteint |

### Messages flash

> | Objectif                                                          |          Bilan |
> | :---------------------------------------------------------------- | -------------: |
> | Lors de la création d’un deck, un message flash est affiché       | Non-implémenté |
> | Lors de la modification d’un deck, un message flash est affiché   | Non-implémenté |
> | Lors de la suppression d’un deck, un message flash est affiché    | Non-implémenté |
> | Lors de la création d’une carte, un message flash est affiché     | Non-implémenté |
> | Lors de la modification d’une carte, un message flash est affiché | Non-implémenté |
> | Lors de la suppression d’une carte, un message flash est affiché  | Non-implémenté |

### Inscription

> | Objectif                                                                                                                                                        |          Bilan |
> | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------: |
> | Aller à l’adresse du site affiche la page de login                                                                                                              | Non-implémenté |
> | Sur l'accueil, cliquer sur le bouton s’inscrire amène à la page inscription                                                                                     | Non-implémenté |
> | Sur la page inscription, si le nom du user est rempli, que le mot de passe fait au moins 8 caractères et que le mot de passe est ok, le bouton d’envoi apparaît | Non-implémenté |
> | Sur la page inscription avec un nom d’utilisateur déjà utilisé, cliquer sur OK amène sur la même page avec un message d’erreur                                  | Non-implémenté |
> | Sur la page inscription avec un nom d’utilisateur valide, cliquer sur OK amène sur la page d’accueil connecté                                                   | Non-implémenté |

> ### Connexion
>
> | Objectif                                                                              |          Bilan |
> | :------------------------------------------------------------------------------------ | -------------: |
> | Sur la page d'accueil, aller à l’adresse du site affiche la page de connexion         | Non-implémenté |
> | Sur la page de connexion avec des infos invalides, cliquer OK ramène sur la même page | Non-implémenté |
> | Sur la page de connexion avec des infos valides, presser OK amène à la page d’accueil | Non-implémenté |

> ### Messages d’erreur précis
>
> | Objectif                                                                                                                                                        |                                         Bilan |
> | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------: |
> | Sur la page nouveau deck avec un titre déjà existant, presser OK affiche un message d’erreur et je reste sur la même page                                       | Atteint, le message est en anglais par contre |
> | Sur la page nouveau deck avec une description de moins de 10 caractères, presser OK affiche un message d’erreur et je reste sur la même page                    | Atteint, le message est en anglais par contre |
> | Sur la page nouvelle carte avec une question déjà existante, presser OK affiche un message d’erreur et je reste sur la même page                                | Atteint, le message est en anglais par contre |
> | Sur la page nouvelle carte avec une question de moins de 10 caractères ou une réponse vide, presser OK affiche un message d’erreur et je reste sur la même page | Atteint, le message est en anglais par contre |

## Stratégie et utilisation de l'IA

> Étant donné que le départ du projet fut très difficile pour moi, j'ai essayé d'être au plus méthodique quant à ma méthode d'apprentissage et de progression dans cet environnement.
> <br>J'ai donc gardé Copilot activé dans Visual Studio Code et me suis appuyé sur ses suggestions afin de voir dans quelle direction creuser. Pour les bugs logiciels je me suis appuyé sur mon expérience, puis si cela ne suffisait pas, je demandais à Copilot par je chat en ajoutant les fichiers susceptibles d'avoir un bug.
> <br>Concernant la compréhension générale comme, par exemple, le schéma MVC, j'ai cherché dans les pdf fournis, puis à nouveau si je ne comprenais pas, je demandais à l'IA - ChatGPT cette fois et pour 2 raisons. La première est que je trouve les explications de ChatGPT plus faciles à comprendre bien que parfois moins précise. La deuxième raison est que la plan Copilot Free possède une limite plutôt basse en terme d'utilisations.
> <br>Je n'ai pas utilisé d'autre IA pour ce projet et je pense avoir plutôt bien compris le fonctionnement de Adonis de manière générale. J'ai encore un peu de peine avec les relations (HasMany, BelongsTo) et la manière de charger les données correspondantes à une entrée dans une autre table (.preload, $extras).
