const db = require('../database')

const collection = 'scrap'

function Scrap(obj) {
  for (const key of Object.keys(obj))
    if (obj[key]) this[key] = obj[key]
}

Scrap.options = {
  resins: {
    epoxy: 'Epoxy',
    ve: 'Vinyl ester',
    pe: 'Polyester',
    pf: 'Phenolic (PF)',
    pu: 'Polyurethane (PU)',
    abs: "Acrylonitrile butadiene styrene (ABS)",
    ldpe: 'Polyethylene (LDPE)',
    hdpe: 'Polyethylene (HDPE)',
    ps: 'Polystyrene (PS)',
    pc: 'Polycarbonate (PC)',
    pp: 'Polypropylene (PP)',
    pvc: 'Polyvinyl chloride (PVC)'
  },
  reinforcements: {
    gf: 'Glass fiber',
    cf: 'Carbon fiber',
    kf: 'Kevlar fiber',
    nf: 'Nylon fiber',
    pf: 'Polyester fiber'
  },
  forms: {
    ground: 'Ground',
    shred: 'Shredded',
    smc: 'Sheet molding compound (SMC)',
    bmc: 'Bulk modling compound (BMC)',
    bulk: 'Bulk',
    choptape: 'Chopped tape',
    trimoff: 'Trim offs',
    mat: 'Mat',
    prepreg: 'Prepreg'
  },
  methods: {
    vbm: 'Vacuum bag molding',
    vip: 'Vacuum infusion processing',
    rtm: 'Resin transfer molding',
    pultrusion: 'Pultrusion',
    extrusion: 'Extrusion',
    injection: 'Injection molding',
    compression: 'Compression molding',
    layup: 'Hand lay-up',
    sprayup: 'Spray-up',
    winding: 'Filament winding'
  },
  origins: {
    hardin: 'Hardin Composites'
  },
  locations: {
    uab: 'University of Alabama at Birmingham (UAB)'
  }
}

Scrap.find = function (query, callback) {
  const res = []
  db.get().collection(collection).find(query).each(function (err, doc) {
    if (doc) {
      res.push(new Scrap(doc))
    } else {
      callback(err, res)
    }
  })
}

Scrap.prototype.add = function (callback) {
  db.get().collection(collection).insertOne(this, function (err, res) {
    callback(err, res.insertedCount)
  })
}

module.exports = Scrap
