export class ContainersListParamsModel {

  /**
   * Return all containers. By default, only running containers are shown. Default false.
   */
  all?: boolean;

  /**
   * Return this number of most recently created containers, including non-running ones.
   */
  limit?: number;

  /**
   * Return the size of container as fields SizeRw and SizeRootFs. Default false.
   */
  size?: boolean;

  /**
   * Filters to process on the container list, encoded as JSON (a map[string][]string).
   * For example, {"status": ["paused"]} will only return paused containers.
   * Available filters:
   *
   *  - ancestor=(<image-name>[:<tag>], <image id>, or <image@digest>)
   *  - before=(<container id> or <container name>)
   *  - expose=(<port>[/<proto>]|<startport-endport>/[<proto>])
   *  - exited=<int> containers with exit code of <int>
   *  - health=(starting|healthy|unhealthy|none)
   *  - id=<ID> a container's ID
   *  - isolation=(default|process|hyperv) (Windows daemon only)
   *  - is-task=(true|false)
   *  - label=key or label="key=value" of a container label
   *  - name=<name> a container's name
   *  - network=(<network id> or <network name>)
   *  - publish=(<port>[/<proto>]|<startport-endport>/[<proto>])
   *  - since=(<container id> or <container name>)
   *  - status=(created|restarting|running|removing|paused|exited|dead)
   *  - volume=(<volume name> or <mount point destination>)
   */
  filters?: string;
}
