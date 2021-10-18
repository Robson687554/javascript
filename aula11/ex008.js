//var vel = 12
//console.log(`A velocidade do seu carro é ${vel}km/h`)
//if (vel > 60) { // condição simples
//  console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
//}
//console.log(`Dirija sempre usando cinto de segurança`)
var fedexAPI = require('fedex-nodejs');

var fedex = new fedexAPI({
  account_number: '674564678',
  meter_number: '252771351',
  key: 'oUimLFafiTMneScW',
  password: 'ePM4cx1C6Xi8VMYf7lmbOA8Vg',
  env: 'test'
});