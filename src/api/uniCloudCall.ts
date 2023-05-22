export const callFunction = (requestData: object) => {
  return uniCloud.callFunction({
    name: 'cloudRequest',
    data: requestData,
  })
}
