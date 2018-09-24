const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const menuList = require('./menu/menu.json');

class RestServer {
  constructor() {
    this.getMenu = this.getMenu.bind(this);
    this.port= 3010;
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({
      extended: false,
    }));
    this.app.use(bodyParser.json());
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`REST API LISTEN => ${this.port}`);
    });

    this.app.get('/menuList', this.getMenu);
  }

  getMenu(req,res){
    console.log('Get Menu consumo');
    res.send(menuList);
  }

}

module.exports = new RestServer();