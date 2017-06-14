export class VolumesListParamsModel {

  /**
   * JSON encoded value of the filters (a map[string][]string) to process on the volumes list.
   * Available filters:
   *
   *  - dangling=<boolean> When set to true (or 1), returns all volumes that are not in use by a container. When set to false (or 0),
   *    only volumes that are in use by one or more containers are returned.
   *  - driver=<volume-driver-name> Matches volumes based on their driver.
   *  - label=<key> or label=<key>:<value> Matches volumes based on the presence of a label alone or a label and a value.
   *  - name=<volume-name> Matches all or part of a volume name.
   */
  filters: string;
}
