#!/usr/bin/env node

const mongoose = require('mongoose')
const Path = require('../server/models/path')

const paths = [
  // Thermoplastics
  {
    label: 'Acrylonitrile butadiene styrene',
    short: 'ABS',
    value: ',resin,thermoplastic,abs',
  },
  {
    label: 'Polyamide',
    short: 'PA',
    value: ',resin,thermoplastic,polyamide,',
  },
  {
    label: 'Polyethylene',
    short: 'PE',
    value: ',resin,thermoplastic,polyethylene,',
  },
  {
    label: 'Polycarbonate',
    short: 'PC',
    value: ',resin,thermoplastic,pc',
  },
  {
    label: 'Polyether ether ketone',
    short: 'PEEK',
    value: ',resin,thermoplastic,peek',
  },
  {
    label: 'Polypropylene',
    short: 'PP',
    value: ',resin,thermoplastic,pp',
  },
  {
    label: 'Polyphenylene Sulfid',
    short: 'PPS',
    value: ',resin,thermoplastic,pps',
  },
  {
    label: 'Polystyrene',
    short: 'PS',
    value: ',resin,thermoplastic,ps',
  },
  {
    label: 'Polytetrafluoroethylene / Teflon',
    short: 'PTFE',
    value: ',resin,thermoplastic,ptfe',
  },
  {
    label: 'Polyvinyl chloride',
    short: 'PVC',
    value: ',resin,thermoplastic,pvc',
  },
  // Thermosets
  {
    label: 'Epoxy',
    value: ',resin,thermoset,epoxy',
  },
  {
    label: 'Phenolic / Bakelite',
    value: ',resin,thermoset,phenolic',
  },
  {
    label: 'Polyester',
    value: ',resin,thermoset,polyester',
  },
  {
    label: 'Polyimide',
    value: ',resin,thermoset,polyimide',
  },
  {
    label: 'Polyurethane',
    short: 'PUR',
    value: ',resin,thermoset,pur',
  },
  {
    label: 'Silicone',
    value: ',resin,thermoset,silicone',
  },
  {
    label: 'Vinyl ester',
    short: 'VE',
    value: ',resin,thermoset,ve',
  },
  {
    label: 'Vulcanized rubber',
    value: ',resin,thermoset,vulcanizedrubber',
  },
  // Polyamides
  {
    label: 'Nylon',
    short: 'PA',
    value: ',resin,thermoplastic,polyamide,pa',
  },
  {
    label: 'Nylon 12',
    short: 'PA12',
    value: ',resin,thermoplastic,polyamide,pa12',
  },
  {
    label: 'Nylon 6',
    short: 'PA6',
    value: ',resin,thermoplastic,polyamide,pa6',
  },
  {
    label: 'Nylon 6,6',
    short: 'PA6,6',
    value: ',resin,thermoplastic,polyamide,pa66',
  },
  // Polyethylenes
  {
    label: 'High density polyethylene',
    short: 'HDPE',
    value: ',resin,thermoplastic,polyethylene,hdpe',
  },
  {
    label: 'Low density polyethylene',
    short: 'LDPE',
    value: ',resin,thermoplastic,polyethylene,ldpe',
  },
  {
    label: 'Medium density polyethylene',
    short: 'MDPE',
    value: ',resin,thermoplastic,polyethylene,mdpe',
  },
  {
    label: 'Ultra high molecular weight polyethylene',
    short: 'UHMWPE',
    value: ',resin,thermoplastic,polyethylene,uhmwpe',
  },
  // Fibers
  {
    label: 'Graphite / Carbon',
    short: 'CF',
    value: ',reinforcement,fiber,graphite,',
  },
  {
    label: 'Glass / Fiberglass',
    short: 'GF',
    value: ',reinforcement,fiber,glass,',
  },
  {
    label: 'Aramid',
    value: ',reinforcement,fiber,aramid,',
  },
  {
    label: 'Boron',
    value: ',reinforcement,fiber,boron',
  },
  {
    label: 'Ceramic',
    value: ',reinforcement,fiber,ceramic',
  },
  {
    label: 'Natural',
    value: ',reinforcement,fiber,natural,',
  },
  // Graphites
  {
    label: 'Low modulus',
    value: ',reinforcement,fiber,graphite,low',
  },
  {
    label: 'Standard modulus',
    value: ',reinforcement,fiber,graphite,standard',
  },
  {
    label: 'Intermediate modulus',
    value: ',reinforcement,fiber,graphite,intermediate',
  },
  {
    label: 'High modulus',
    value: ',reinforcement,fiber,graphite,high',
  },
  {
    label: 'Ultra modulus',
    value: ',reinforcement,fiber,graphite,ultrahigh',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,graphite,other',
  },
  // Glasses
  {
    label: 'A-glass / Alkali glass',
    value: ',reinforcement,fiber,glass,alkali',
  },
  {
    label: 'C-glass / Chemical glass',
    value: ',reinforcement,fiber,glass,chemical',
  },
  {
    label: 'E-glass / Electrical glass',
    value: ',reinforcement,fiber,glass,electrical',
  },
  {
    label: 'S-glass / Structural glass',
    value: ',reinforcement,fiber,glass,structural',
  },
  {
    label: 'D-glass / Dielectric glass',
    value: ',reinforcement,fiber,glass,dielectric',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,glass,other',
  },
  // Aramids
  {
    label: 'Kevlar',
    value: ',reinforcement,fiber,aramid,kevlar',
  },
  {
    label: 'Twaron',
    value: ',reinforcement,fiber,aramid,twaron',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,aramid,other',
  },
  // Naturals
  {
    label: 'Bamboo',
    value: ',reinforcement,fiber,natural,bamboo',
  },
  {
    label: 'Sisal',
    value: ',reinforcement,fiber,natural,sisal',
  },
  {
    label: 'Hemp',
    value: ',reinforcement,fiber,natural,hemp',
  },
  {
    label: 'Jute',
    value: ',reinforcement,fiber,natural,jute',
  },
  {
    label: 'Kenaf',
    value: ',reinforcement,fiber,natural,kenaf',
  },
  {
    label: 'Other',
    value: ',reinforcement,fiber,natural,other',
  },
  // Particulates
  {
    label: 'Chopped fibers',
    value: ',reinforcement,particulate,choppedfibers',
  },
  {
    label: 'Platelets',
    value: ',reinforcement,particulate,platelets',
  },
  {
    label: 'Hollow spheres',
    value: ',reinforcement,particulate,hollowspheres',
  },
  {
    label: 'Carbon nanotubes',
    short: 'CNT',
    value: ',reinforcement,particulate,cnt',
  },
  // Forms
  {
   label: 'Ground',
   value: ',form,ground',
  },
  {
   label: 'Shredded',
   value: ',form,shredded',
  },
  {
   label: 'Sheet molding compound',
   short: 'SMC',
   value: ',form,smc',
  },
  {
   label: 'Bulk modling compound',
   short: 'BMC',
   value: ',form,bmc',
  },
  {
   label: 'Bulk',
   value: ',form,bulk',
  },
  {
   label: 'Chopped tape',
   value: ',form,choppedtape',
  },
  {
   label: 'Trim offs',
   value: ',form,trimoffs',
  },
  {
   label: 'Mat',
   value: ',form,mat',
  },
  {
   label: 'Prepreg',
   value: ',form,prepreg',
  },
]

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/composites'

const error = err => {
  console.error('Error:', err.message)
  process.exit(1)
}

mongoose.connect(uri).then(
  () => Path.create(paths).then(() => process.exit()).catch(error),
  error
)
