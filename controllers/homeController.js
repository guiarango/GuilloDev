const homeController = {
  showPage: async (req, res) => {
    return res.render("home");
  },
};

module.exports = homeController;
