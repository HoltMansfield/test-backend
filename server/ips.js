const ips = {}

const getIps = (ip) => {
  ips[ip] = {
    ip: ip,
    timestamp: new Date()
  }

  return ips
}

module.exports = {
  getIps
}
