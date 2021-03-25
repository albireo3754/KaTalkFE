export type BotChat = Carousel | ListCard | SimpleText;
export interface Carousel {
  carousel: CarouselContent;
  values: { type: any[] };
}

export interface SimpleText {
  simpleText: string;
}
export interface ListCard {
  listCard: ListCardContent;
}
export interface CarouselContent {
  type: 'basicCard';
  items: BasicCardContent[];
}

export interface BasicCardContent {
  title: string;
  description: string;
  thumbnail: { imageUrl: string };
  buttons: BasicCardButton[];
}

export type SyntaxParsed = RuneSyntax | ItemSyntax | SkillSyntax;

export interface ItemSyntax {
  type: '아이템';
  item: { itemKey: string[]; itemTitle: string[]; itemDescription: string[] };
}
export interface RuneSyntax {
  type: '주력 룬' | '보조 룬';
  runeName: string[];
  runeDetail: { kname: string; color: string; iconUrl: string }[];
}

export interface SkillSyntax {
  type: '스킬';
  skills: string[];
}
export type ListCardSyntax = RuneSyntax;
export interface BasicCardButton {
  label: string;
  action: 'message';
  messageText: string;
}

export interface runeDetail {
  kname: string;
  color: string;
  inconUrl: string;
}

export interface SimpleCardContent {
  title: string;
  description: string;
  thumbnail: { imageUrl: string };
}
export interface ListCardContent {
  title: string;
  items: SimpleCardContent[];
}

export type ButtonContent = BasicCardButton;
export type UserChat = string;

export type ChatContent = UserChat | BotChat | BotChat[];
