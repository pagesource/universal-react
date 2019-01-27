// @flow

export type Props = {
  content?: string,
  title?: string,
  schema?: any,
};

export type MetaProps = {
  prefix?: string,
  meta: {
    id: number,
    key: string,
    content: string,
  },
  content: string,
};
