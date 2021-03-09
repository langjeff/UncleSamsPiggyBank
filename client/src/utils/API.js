import axios from "axios";

export default {
  // Gets all books
  getAllTax: function () {
    return axios.get("/api/tax");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  // Get user data upon login
  },
  //* this is not working
  // getUser: function (user) {
  //   return axios.get("/api/save", { params: { q: user } });
  // },
  // Save user data
  saveUser: function(userData) {
    return axios.post("/api/save", userData);
  }
};
