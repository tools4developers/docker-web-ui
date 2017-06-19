export class NetworksListParamsModel {
  /**
   * JSON encoded value of the filters (a map[string][]string) to process on the networks list.
   * Available filters:
   *
   *  - driver=<driver-name> Matches a network's driver.
   *  - id=<network-id> Matches all or part of a network ID.
   *  - label=<key> or label=<key>=<value> of a network label.
   *  - name=<network-name> Matches all or part of a network name.
   *  - scope=["swarm"|"global"|"local"] Filters networks by scope (swarm, global, or local).
   *  - type=["custom"|"builtin"] Filters networks by type. The custom keyword returns all user-defined networks.
   */
  filters?: string;
}
