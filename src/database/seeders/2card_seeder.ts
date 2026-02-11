import Card from '#models/card'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Card.createMany([
      //question sur js
      {
        id: 1,
        deck_id: 1,
        question: 'Quelle est la différence entre let et var ?',
        answer: 'let a une portée de bloc alors que var a une portée de fonction.',
      },
      {
        id: 2,
        deck_id: 1,
        question: 'Que retourne typeof null ?',
        answer: "object (c'est une erreur historique de JavaScript).",
      },
      {
        id: 3,
        deck_id: 1,
        question: 'Quelle est la différence entre == et === ?',
        answer: '=== compare la valeur ET le type, == fait une conversion implicite de type.',
      },
      {
        id: 4,
        deck_id: 1,
        question: 'Comment déclarer une fonction fléchée ?',
        answer: 'const maFonction = () => { ... }',
      },
      {
        id: 5,
        deck_id: 1,
        question: "Qu'est-ce qu'un callback ?",
        answer: 'Une fonction passée en argument à une autre fonction.',
      },
      {
        id: 6,
        deck_id: 1,
        question: 'À quoi sert async/await ?',
        answer: 'À gérer du code asynchrone de manière plus lisible que les promesses classiques.',
      },
      {
        id: 7,
        deck_id: 1,
        question: "Qu'est-ce que le hoisting ?",
        answer:
          'Le comportement où les déclarations sont déplacées en haut de leur portée avant exécution.',
      },
      //questions sur SQL
      {
        id: 8,
        deck_id: 2,
        question: "Qu'est-ce qu'une clé primaire ?",
        answer: "Un identifiant unique pour chaque ligne d'une table.",
      },
      {
        id: 9,
        deck_id: 2,
        question: "Qu'est-ce qu'une clé étrangère ?",
        answer: "Une colonne qui référence la clé primaire d'une autre table.",
      },
      {
        id: 10,
        deck_id: 2,
        question: 'Quelle est la différence entre DELETE et TRUNCATE ?',
        answer:
          'DELETE supprime ligne par ligne et peut être filtré ; TRUNCATE vide toute la table rapidement.',
      },
      {
        id: 11,
        deck_id: 2,
        question: 'À quoi sert une jointure (JOIN) ?',
        answer: 'À combiner des données provenant de plusieurs tables.',
      },
      {
        id: 12,
        deck_id: 2,
        question: 'Quelle est la différence entre INNER JOIN et LEFT JOIN ?',
        answer:
          'INNER JOIN retourne les correspondances uniquement ; LEFT JOIN retourne toutes les lignes de la table gauche même sans correspondance.',
      },
      {
        id: 13,
        deck_id: 2,
        question: "Qu'est-ce que la normalisation ?",
        answer:
          'Un processus visant à réduire la redondance et améliorer la structure des données.',
      },
      {
        id: 14,
        deck_id: 2,
        question: 'À quoi sert un index ?',
        answer: 'À accélérer les recherches dans une table.',
      },
      {
        id: 15,
        deck_id: 2,
        question: "Qu'est-ce qu'une transaction ?",
        answer: "Un ensemble d'opérations exécutées comme une unité atomique (tout ou rien).",
      },
    ])
  }
}
