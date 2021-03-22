// export interface ChatContents {
//   version?: string;
// }

export interface ContentFetched {
  version: string;
}

export interface Carousel {
  carousel: any;
}
export type UserChat = string;
export type ChatContent = UserChat | Carousel;

export async function fetchData(champName: string): Promise<ContentFetched> {
  try {
    const data = { action: { params: { champion: champName } } };
    const req = new Request('http://18.181.100.134:3000/api/champion/', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Host: 'http://18.181.100.134:3000/api/champion/',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await fetch(req);
    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    console.log(e);
    throw {
      message: e.message,
      status: e.status,
    };
  }
}
