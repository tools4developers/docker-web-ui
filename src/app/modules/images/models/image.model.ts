export class ImageModel {
  Id: string;
  ParentId: string;
  RepoTags: Array<string>;
  RepoDigests: Array<string>;
  Created: number;
  Size: number;
  SharedSize: number;
  VirtualSize: number;
  Labels: any | null;
  Containers: number;
}

