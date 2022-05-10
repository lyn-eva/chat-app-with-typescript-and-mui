export interface dbPropTypes {
  children: JSX.Element;
}

export interface ctxTypes {
  messages: msgTypes[];
  sendMsg: (msg: string) => Promise<void>;
  user: string
}
export interface msgTypes {
  msg: string;
  id: string;
  user: string;
}
