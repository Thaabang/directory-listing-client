export interface DirectoryItem {
  name: string;
  fullPath: string;
  size: number;
  extension: string;
  createdDate: Date;
  isDirectory: boolean;
  permissions: number;
}
