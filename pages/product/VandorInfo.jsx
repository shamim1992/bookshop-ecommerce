import React from "react";

const dummyBooks = [
  {
    id: 1,
    title: "Book 1",
    author_name: "Author 1",
    pages: 250,
    isbn: "978-1234567890",
    edition: "1st Edition",
    subject_name: "Fiction",
    attributes: [
      { name: "Language", value: "English" },
      { name: "Genre", value: "Mystery" },
    ],
  },
  {
    id: 2,
    title: "Book 2",
    author_name: "Author 2",
    pages: 320,
    isbn: "978-0987654321",
    edition: "2nd Edition",
    subject_name: "Science Fiction",
    attributes: [
      { name: "Language", value: "English" },
      { name: "Genre", value: "Science Fiction" },
    ],
  },
  {
    id: 3,
    title: "Book 3",
    author_name: "Author 3",
    pages: 180,
    isbn: "978-5432109876",
    edition: "3rd Edition",
    subject_name: "History",
    attributes: [
      { name: "Language", value: "History" },
      { name: "Genre", value: "Non-Fiction" },
    ],
  },
];

const VandorInfo = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>AUTHOR</th>
              <td>{item.author_name || "---"}</td>
            </tr>
            <tr>
              <th>Pages</th>
              <td>{item.pages || "---"}</td>
            </tr>
            <tr>
              <th>ISBN</th>
              <td>{item.isbn || "---"}</td>
            </tr>
            <tr>
              <th>EDITION</th>
              <td>{item.edition || "---"}</td>
            </tr>
            <tr>
              <th>SUBJECT</th>
              <td>{item.subject_name || "---"}</td>
            </tr>
            {item.attributes?.map((attr) => (
              <tr key={attr.name}>
                <th>{attr.name}</th>
                <td>{attr.value || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VandorInfo;
