/*
    Simple Twitter bot which uses Ocr to gather and display intel about covid reliefs :D
     (C) Open Source!
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
**/

const Twit = require('twit')
const config = require("./Json/config.json");




const Client = new Twit({
  consumer_key:         `${config.consumer_key}`,  //Check Readme for Key and Info
  consumer_secret:      `${config.consumer_secret}`,  //Check Readme for Key and Info
  access_token:         `${config.access_token}`,  //Check Readme for Key and Info
  access_token_secret:  `${config.access_token_secret}`,  //Check Readme for Key and Info
  timeout_ms:           60*1000,// optional HTTP request timeout to apply to all requests.
  strictSSL:            true,   // optional - requires SSL certificates to be valid.
});

//
//  tweet 'hello world!'
//