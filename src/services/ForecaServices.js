const { Axios } = require('axios')
module.exports = class ForecaService extends Axios {
  constructor() {
    super({})
    this.token = process.env.FORECA_TOKEN
    this.url = 'https://fnw-us.foreca.com/'
  }

  fetchWeeklyData(location) {
    return this.get(
      `${this.url}/api/v1/forecast/daily/${location}?windnit=KMH&dataset=full&token=${this.token}`,
    )
  }
}
