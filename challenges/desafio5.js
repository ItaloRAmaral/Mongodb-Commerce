db.produtos.find({
  $or: [{
    curtidas: {
      $eq: 36,
    },
  }, {
    vendidos: {
      $eq: 85,
    },
  }],
}, {
  nome: true,
  vendidos: true,
  curtidas: true,
  _id: false,
});