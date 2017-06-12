/**
 * Query Parameters
 */
export class ImagesListParamsModel {

  /**
   * Show all images. Only images from a final layer (no children) are shown by default.
   *
   * Default: false
   */
  all?: boolean;

  /**
   * A JSON encoded value of the filters (a map[string][]string) to process on the images list.
   * Available filters:
   *
   *  - before=(<image-name>[:<tag>], <image id> or <image@digest>)
   *  - dangling=true
   *  - label=key or label="key=value" of an image label
   *  - reference=(<image-name>[:<tag>])
   *  - since=(<image-name>[:<tag>], <image id> or <image@digest>)
   */
  filters?: string;

  /**
   * Show digest information as a RepoDigests field on each image.
   *
   * Default: false
   */
  digests?: boolean;
}
