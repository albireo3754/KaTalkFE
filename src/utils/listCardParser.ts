import {
  ListCardContent,
  SyntaxParsed,
  SimpleCardContent,
  SimpleText,
} from '../types';

export function listCardParser(
  syntax: SyntaxParsed
): { listCard: ListCardContent } | SimpleText {
  if (syntax.type === '주력 룬' || syntax.type === '보조 룬') {
    const title = `${syntax.type} 정보 입니다.`;
    const items: SimpleCardContent[] = [];
    console.log(syntax, 'syntax');
    syntax.runeName.map((rune, i) => {
      items.push({
        title: syntax.runeDetail[i].kname,
        description: rune,
        thumbnail: {
          imageUrl: `http://ddragon.leagueoflegends.com/cdn/img/${syntax.runeDetail[i].iconUrl}`,
        },
      });
    });
    const listCardContent = { title, items };
    return { listCard: listCardContent };
  } else if (syntax.type === '아이템') {
    const title = `${syntax.type} 정보 입니다.`;
    const items: SimpleCardContent[] = [];
    const version = '11.6.1';
    console.log(syntax, 'syntax');
    const {
      item: { itemKey, itemDescription, itemTitle },
    } = syntax;
    itemKey.map((key, i) => {
      items.push({
        title: itemTitle[i],
        description: itemDescription[i],
        thumbnail: {
          imageUrl: `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${key}.png`,
        },
      });
    });
    const listCardContent = { title, items };
    return { listCard: listCardContent };
  } else if (syntax.type === '스킬') {
    return {
      simpleText: syntax.skills
        .map((x) => ['?', 'Q', 'W', 'E', 'R'][Number(x)])
        .join(' - '),
    };
  }
  return { simpleText: '정보를 받아오기 실패하였습니다.' };
}
