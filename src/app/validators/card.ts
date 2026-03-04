import vine from '@vinejs/vine'
const cardValidator = vine.compile(
  vine.object({
    //validation des champs (varchar 255 non-null)
    question: vine
      .string()
      .trim()
      .minLength(1)
      .maxLength(255)
      .unique({ table: 'cards', column: 'question' }),
    answer: vine
      .string()
      .trim()
      .minLength(1)
      .maxLength(255)
      .unique({ table: 'cards', column: 'answer' }),
  })
)
export { cardValidator }
