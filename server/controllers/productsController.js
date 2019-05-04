module.exports = {
  getHelmets: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getHelmet([sku, model, price, brand, image])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getGoggles: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getGoggle([sku, model, price, brand, image])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
