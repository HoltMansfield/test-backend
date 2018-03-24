const ips = {
  // '192.168.0.2': {
  //   ip: '192.168.0.2',
  //   timestamp: new Date()
  // },
  // '127.0.0.1': {
  //   ip: '127.0.0.1',
  //   timestamp: new Date()
  // },
}

const formatIps = (ips) => {
  const ipsArray = []
  Object.keys(ips).forEach((key) => {
    ipsArray.push(ips[key])
  })

  return ipsArray
}

const getIps = (ip) => {
  ips[ip] = {
    ip: ip,
    timestamp: new Date()
  }

  return formatIps(ips)
}

module.exports = {
  getIps
}
