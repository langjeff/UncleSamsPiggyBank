import axios from "axios";

export default {
  // Gets all books
  getAllTax: function () {
    return axios.get("/api/tax");
  },
  // gets answers from db for a particular id
  // getAnswers: function (id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // deletesAnswers from db for a particular id
  // deleteAnswers: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves answers to db
  saveAnswers: function (answers) {
    return axios.post("/api/answers", answers);
  // Get user data upon login
  },
  //* this works
  getUser: function (user) {
    return axios.get("/api/save", { params: { q: user } });
  },
  //* this works
  saveUser: function(userData) {
    return axios.post("/api/save", userData);
  },
  //* this works
  getLastAnswer: function () {
    return axios.get("/api/answers");
  },
};
