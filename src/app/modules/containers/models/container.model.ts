export class ExposedPortModel {
  /**
   * IP address
   */
  IP?: string;

  /**
   * Port on the container
   */
  PrivatePort: number;

  /**
   * Port exposed on the host
   */
  PublicPort?: number;

  /**
   * Valid values: "tcp", "udp"
   */
  Type: string;
}

export class ContainerModel {

  /**
   * The ID of this container
   */
  Id: string;

  /**
   * The names that this container has been given
   */
  Names: Array<string>;

  /**
   * The name of the image used when creating this container
   */
  Image: string;

  /**
   * The ID of the image that this container was created from
   */
  ImageID: string;

  /**
   * Command to run when starting the container
   */
  Command: string;

  /**
   * When the container was created
   */
  Created: number;

  /**
   * When the container was created
   */
  Ports?: Array<ExposedPortModel>;

  /**
   * Additional human-readable status of this container (e.g. Exit 0)
   */
  Status: string;

}
