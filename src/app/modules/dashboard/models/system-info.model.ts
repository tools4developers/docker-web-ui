export class SystemInfoPluginsModel {
  Volume: Array<string>;
  Network: Array<string>;
  Authrization: Array<string>;
  Log: Array<string>;
}

export class SystemInfoModel {
  Architecture: string;
  Containers: number;
  ContainersRunning: number;
  ContainersStopped: number;
  Images: number;
  Driver: string;
  DriverStatus: Array<Array<string>>;
  Plugins: SystemInfoPluginsModel;
  OSType: string;
  NCPU: number;
  MemoryTotal: number;
}
