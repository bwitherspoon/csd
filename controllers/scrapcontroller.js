const Scrap = require('../models/scrap')

const options = {
  view: 'submit',
  authenticated: true,
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
    glass: 'Glass fiber',
    carbon: 'Carbon fiber',
    kevlar: 'Kevlar fiber',
    nylon: 'Nylon fiber',
    polyester: 'Polyester fiber'
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

module.exports.submit = {
  get: function (req, res) {
    res.render('submit', options)
  },
  post: function (req, res) {
    const scrap = new Scrap(req.body)
    if (Object.keys(scrap).length == 0)
      return res.status(400).send('Refusing to accept an empty document')
    scrap.add(function (err, cnt) {
      if (err) {
        console.error(err.stack)
        res.status(500).end()
      } else if (!cnt) {
        res.status(400).send('Failure')
      } else {
        res.redirect('/scrap')
      }
    })
  }
}
