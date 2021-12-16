export class LocalStorageUtils {
  saveApiKey(apiKey: string) {
    localStorage.setItem('xRapidApiKey', apiKey);
  }

  getApiKey() {
    return localStorage.getItem('xRapidApiKey') || '';
  }
}
