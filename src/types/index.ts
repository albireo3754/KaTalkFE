export interface BotChat {
  carousel: CarouselContent;
  values: { type: any[] };
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

export interface BasicCardButton {
  label: string;
  action: 'message';
  messageText: string;
}

export type ButtonContent = BasicCardButton;
export type UserChat = string;

export type ChatContent = UserChat | BotChat;
