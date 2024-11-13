export type Category = {
    _ref: string;
    _type: string;
    _key: string;
  };
  
  export type BlockChild = {
    _type: string;
    _key: string;
    text: string;
    marks: string[];
  };
  
  export type Block = {
    _type: string;
    style: string;
    _key: string;
    markDefs: any[];
    children: BlockChild[];
  };
  
  export type Asset = {
    _ref: string;
    _type: string;
  };
  
  export type MainImage = {
    _type: string;
    alt: string;
    asset: Asset;
  };
  
  export type Author = {
    _type: string;
    _ref: string;
  };
  
  export type Slug = {
    current: string;
    _type: string;
  };
  
  export type Post = {
    _id: string;
    categories: Category[];
    body: Block[];
    mainImage: MainImage;
    author: Author;
    _createdAt: string;
    _rev: string;
    _type: string;
    title: string;
    _updatedAt: string;
    slug: Slug;
    publishedAt: string;
  };
  