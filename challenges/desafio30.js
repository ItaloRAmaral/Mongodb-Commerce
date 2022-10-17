db.produtos.updateMany({ nome: "Big Mac"}, { $unset: { curtidas: "" a } });

db.produtos.find({}, { _id: false, nome: true, curtidas: true });