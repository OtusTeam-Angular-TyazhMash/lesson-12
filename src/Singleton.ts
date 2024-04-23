export class Singleton {
  private static instance: Singleton;

  public static getInstance() {

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = new Singleton();
    return Singleton.instance;
  }

  getData() {
    return {
      id: 1, name: 'User Name'
    }
  }
}
