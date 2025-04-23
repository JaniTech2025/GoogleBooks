export async function fetchBooks(){
    const url = ("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map((item) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks?.thumbnail
    }));
}