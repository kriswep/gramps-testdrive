import { GraphQLConnector } from '@gramps/gramps-express';

// TODO: change `YourDataSourceConnector` to a descriptive name
export default class YourDataSourceConnector extends GraphQLConnector {
  /**
   * Connector for a restaurant collection
   * @member {string}
   */
  apiBaseUri = `https://dontwannauseurl.butadborm`;
}
