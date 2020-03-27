async function profileAndQuote (param) {
  const qs = Object.entries(param).map(e => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`).join('&')
  const pr = [
    window.fetch(`${BASE}quote?${qs}`),
    window.fetch(`${BASE}stock/profile?${qs}`)
  ].map(p => p.then(x => x.json()))
  const r = await Promise.all(pr)
  return Object.assign({}, ...r)
}
await profileAndQuote({
    token: 'bpo09nfrh5ra872e0oi0',
    symbol: 'AAPL'
}) (edited)
