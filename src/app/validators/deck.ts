import vine from '@vinejs/vine'
const deckValidator = vine.compile(
  vine.object({
    //validation des champs (varchar 255 non-null)
    name: vine.string().trim().minLength(1).maxLength(255),
    description: vine.string().trim().minLength(1).maxLength(255),
  })
)
export { deckValidator }
