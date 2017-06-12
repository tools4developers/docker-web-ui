/**
 * Query parameters
 */
export class ImagesDeleteParamsModel {

  /**
   * Remove the image even if it is being used by stopped containers or has other tags
   */
  force?: boolean;

  /**
   * Do not delete untagged parent images
   */
  noprune?: boolean;
}
