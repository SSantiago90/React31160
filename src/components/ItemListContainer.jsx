function ItemListContainer( { titulo } ) {
  return (
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-pink-600">{ titulo }</h1>
      </div>
    </div>
  )
}

export default ItemListContainer
