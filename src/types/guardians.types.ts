export interface Guardian {
  id?: string;
  name: string;
  image?: string;
  description?: string;
  attributes?: object[];
  createdAt?: Date;
  updatedAt?: Date;
}