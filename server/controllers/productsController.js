module.exports = {
  getHelmets: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getHelmet([sku, model, price, brand, image])
      .then(helmets => {
        res.status(200).json(helmets);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getGoggles: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getGoggle([sku, model, price, brand, image])
      .then(goggles => {
        res.status(200).json(goggles);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getPants: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getPant([sku, model, price, brand, image])
      .then(pants => {
        res.status(200).json(pants);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getBoots: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getBoot([sku, model, price, brand, image])
      .then(boots => {
        res.status(200).json(boots);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getGloves: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getGlove([sku, model, price, brand, image])
      .then(gloves => {
        res.status(200).json(gloves);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getJerseys: (req, res) => {
    const { sku, model, price, brand, image } = req.body;
    const db = req.app.get("db");
    db.getJersey([sku, model, price, brand, image])
      .then(jerseys => {
        res.status(200).json(jerseys);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addItemToCart: (req, res) => {
    console.log(req.body);
  }
};
