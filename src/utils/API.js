//pull in employees from API for directory
import axios from "axios";
export default {
  // Gets all users
  getResults: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

 