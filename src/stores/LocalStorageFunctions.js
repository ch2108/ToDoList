export function saveToStorage(arr, key = 'appState') {
  let serializedData = JSON.stringify(arr);
  localStorage[key] = serializedData;
}

export function readFromStorage(key = 'appState') {
  let serializedData = localStorage[key]; // string

  // if (serializedData) {
  //   return JSON.parse(serializedData);
  // } else {
  //   return [];
  // }

  try {
    return JSON.parse(serializedData);
  } catch(e) {
    return null
  }
}
