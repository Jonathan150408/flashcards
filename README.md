# Flashcards

## Objectif pédagogiques et produits

L'objectif final de ce projet est de fournir une application à l'aide du framework Adonis. L'application permettra de créer, réviser et sauvegarder des decks de flashcards utiles à l'apprentissage. Ce projet vise surtout à augmenter / travailler les compétences avec le célèbre framework Adonis.

## User Stories

- En tant qu'utilisateur, j'aimerais voir la liste de mes decks lors de la connection, afin d'avoir accès à tous mes decks enregistrés.
- En tant qu'utilisateur, j'aimerais que le curseur de la souris change en passant sur un de mes decks, afin que je puisse facilement comprendre qu'un clic provoque une redirection.
- En tant que dévellopeur, j'aimerais que l'action de clic sur _ajouter_ redirige l'utilisateur vers l'interface de création, afin que les utilisateurs puissent créer et ajouter leurs decks.
- En tant qu'utilisateur, j'aimerais qu'un clic sur _abandonner_ me permette de retourner à la liste des decks, afin de pouvoir abandonner la création d'un deck dans le cas d'un changement d'avis.
- En tant qu'utilisateur, j'aimerais être redirigé sur la liste des decks lors de la validation de la création d'un nouveau deck, afin de pouvoir y accéder.
- En tant que dévellopeur, je souhaite que la création d'un deck du même nom qu'un autre déjà existant du même utilisateur soit interdite, afin d'éviter les doublons et les collisions.
- En tant que client, j'aimerais que la création d'un deck dont la description contient moins de 10 caractères soit annulée, afin de ne pas permettre de trop petites descriptions.
- En tant qu'utilisateur, j'aimerais qu'un clic sur une ligne du tableau sur la page de liste des decks me permette d'accéder à toutes les cartes, afin de pouvoir m'entrainer.
- En tant qu'utilisateur, j'aimerais qu'une pop-up me demande confirmation lors de la suppression d'un deck, afin d'éviter les supressions involontaires.
- En tant qu'utilisateur, j'aimerais que l'annulation de la supression d'un deck me fasse revenir sur la liste des decks, afin de pouvoir sélectionner le deck de mon choix.
- En tant qu'utilisateur, j'aimerais qu'un deck soit supprimé lors de la confirmation sur la pop-up, afin de ne plus voir ce deck.
- En tant qu'utilisateur, je souhaite arriver sur la page d'édition avec les champs préremplis lors d'un clic sur _modifier_, afin de pouvoir modifier le deck.
- En tant que client, je souhaite qu'un deck soit mis à jour lors de la sauvegarde de changements, afin que les utilisateurs puissent porfiter de la dernière version.
- En tant que client, je souhaite qu'un clic sur _abandonner_ lors de la modification d'un deck ne modifie pas le deck, afin que les utilisateurs puissent annuler les changements effectués.

## Marche à suivre - installation et utilisation

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
> | Sur la page de visualisation d'une carte, cliquer dessus la retourne                                    |                                                                                |
> | Sur la page de visualisation d'une carte, je clique sur OK et retourn à la liste des cartes du deck     |                                                                        Atteint |
> | Depuis le formulaire de création d'une carte, abandonner fait revenir sur la liste des cartes           |                                                                        Atteint |
> | Le formulaire de création ajoute la nouvelle carte au deck après confirmation                           |                                                                        Atteint |
> | Le formulaire ne crée pas de doublon de carte (même question)                                           |                                                                                |
> | Le formulaire ne valide pas les cartes dont la question fait moins de 10 caractère ou réponse vide      |                                                                                |
> | Si je clique sur annuler lors de la suppression, la carte n'est pas supprimée                           |                   Discutable, annuler n'existe pas, il faut cliquer sur escape |
> | Sur la page de la carte, je clique sur supprimer et un popup apparait pour me demander de confirmer     |      Discutable, confirmation oui mais le "popup" est généré par le navigateur |
> | Sur la page de la carte, je peux accèder au formulaire de modification en cliquant sur modifier         |                                                                        Atteint |
> | Sur la page de modification, cliquer sur abandonner fait revenir à la page de la carte sans la modifier |                                                                        Atteint |
> | Sur la page de modification, la validation du form avec des données ok modifie la carte                 | Discutable, modification oui, mais impossible de valider avec la même question |

### Entrainement et mode de base

## Stratégie et utilisation de l'IA

> Étant donné que le départ du projet fut très difficile pour moi, j'ai essayé d'être au plus méthodique quant à ma méthode d'apprentissage et de progression dans cet environnement.
> <br>J'ai donc gardé Copilot activé dans Visual Studio Code et me suis appuyé sur ses suggestions afin de voir dans quelle direction creuser. Pour les bugs logiciels je me suis appuyé sur mon expérience, puis si cela ne suffisait pas, je demandais à Copilot par je chat en ajoutant les fichiers susceptibles d'avoir un bug.
> <br>Concernant la compréhension générale comme, par exemple, le schéma MVC, j'ai cherché dans les pdf fournis, puis à nouveau si je ne comprenais pas, je demandais à l'IA - ChatGPT cette fois et pour 2 raisons. La première est que je trouve les explications de ChatGPT plus faciles à comprendre bien que parfois moins précise. La deuxième raison est que la plan Copilot Free possède une limite plutôt basse en terme d'utilisations.
> <br>Je n'ai pas utilisé d'autre IA pour ce projet et je pense avoir plutôt bien compris le fonctionnement de Adonis de manière générale. J'ai encore un peu de peine avec les relations (HasMany, BelongsTo) et la manière de charger les données correspondantes à une entrée dans une autre table (.preload, $extras).
