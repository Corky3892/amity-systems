import { createConnection , Connection, ConnectionOptions } from "typeorm";

/**
 * Create a connection to any database supported by typeorm.
 * https://typeorm.io/#/
 */
export class Database {

  /**
   * Instance of typeorm connecion options.
   */
  private _params: ConnectionOptions;

  /**
   * Instance of typeorm connecion object.
   */
  private _connection: Connection;

  /**
   * Create a new instabase of the Database connector.
   */
  constructor(params: ConnectionOptions) {
    this._params = params;
  }

  /**
   * Bootstrap a connection to the database.
   */
  public async connect(): Promise<void> {
    this._connection = await createConnection(this._params);
    console.log(`Connection to ${this._params.database} up and running on ${this._params.type}.`);
  }

  /**
   * Close the database connection.
   */
  public async close(): Promise<boolean> {
    try {
      this._connection.close();
      return true;
    } catch (e) {
      return false;
    }
  }
}
