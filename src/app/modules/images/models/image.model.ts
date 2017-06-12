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

  get Repository(): string {
    if (this.RepoTags && this.RepoTags.length !== 0) {
      const repoTag = this.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[0] : '';
    }

    return '';
  }

  get Tag(): string {
    if (this.RepoTags && this.RepoTags.length !== 0) {
      const repoTag = this.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[1] : '';
    }
  }
}

