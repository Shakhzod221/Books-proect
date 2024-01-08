interface BookCardProps {
    book_cover: string,
    title: string,
    description: string,
    pages: string,
    price: string,
    year: string
}

const BookCard = (props: BookCardProps) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <h1></h1>
      <article></article>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default BookCard
