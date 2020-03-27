///****************************************** */
// async function profileAndQuote (param) {
//   const qs = Object.entries(param).map(e => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`).join('&')
//   const pr = [
//     window.fetch(`${BASE}quote?${qs}`),
//     window.fetch(`${BASE}stock/profile?${qs}`)
//   ].map(p => p.then(x => x.json()))
//   const r = await Promise.all(pr)
//   return Object.assign({}, ...r)
// }
// await profileAndQuote({
//     token: 'bpo09nfrh5ra872e0oi0',
//     symbol: 'AAPL'
// }) (edited)

//another random function
//***************************************** */

// useFocusEffect(
//   React.useCallback(() => {
//     console.log("kenny");
// var requestOptions = {
//   method: "GET"
// };
// fetch(`${BASE}${TICKER}&token=bpo09nfrh5ra872e0oi0`, requestOptions)
//   .then(response => response.json())
//   .then(result => setCurrentValue(result))
//   .catch(error => console.log("error", error));
// })
// );
