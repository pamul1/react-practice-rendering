export function BookList() {
    const books = [
        { id: 1, title: "Holly Moments", author: "Matthew Kelly", year: 2022 },
        { id: 2, title: "October Sky", author: "Homer Hickam", year: 1998 },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    ];

    return (
        <div>
            <ul>
                {books.map((book) => (<li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                </li>
                ))}
            </ul>
        </div>
    )


}