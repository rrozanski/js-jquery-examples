const receivedData =
  '{"fullName":"Jason Kowalski","age":29,"address":{"country":"Poland"}}';

let parsedData = '';

try {
  parsedData = JSON.parse(receivedData);
} catch (error) {
  console.log('ERROR! Data format is incorrect.')
}
