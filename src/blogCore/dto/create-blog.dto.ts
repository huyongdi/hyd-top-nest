export class CreateBlogDto {
  readonly type: number;
  readonly title: string;
  readonly content: string;
  createTime: string;
  _id?: string;
  updateTime?: string;
}
