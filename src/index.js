class Sample {
  constructor (name = 'name') {
    this.name = name
  }
  hello () {
    return `Hello ${this.name}`
  }
}

module.exports = Sample
