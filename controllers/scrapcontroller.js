const Scrap = require('../models/scrap')

const options = {
  view: 'scrap',
  authenticated: true,
  resins: {
    epoxy: 'Epoxy',
    ve: 'Vinyl Ester',
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
    glass: 'Glass Fiber',
    carbon: 'Carbon Fiber',
    kevlar: 'Kevlar Fiber'
  },
  forms: {
    ground: 'Ground',
    shred: 'Shredded',
    smc: 'Sheet molding compound (SMC)',
    bmc: 'Bulk modling compound (BMC)',
    bulk: 'Bulk',
    choptape: 'Chopped Tape',
    trimoff: 'Trim Offs'
  },
  methods: {
    pultrusion: 'Pultrusion',
    extrusion: 'Extrusion',
    injection: 'Injection molding',
    compression: 'Compression molding'
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
    res.render('scrap', options)
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
