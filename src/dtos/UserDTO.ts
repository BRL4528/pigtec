export type UserDTO = {
  id: string;
  nickname: string;
  name: string;
  producer_id: string
}

export type ProducerDTO = {
  id: string;
  name: string;
  farms: [
    {
      id: string;
      name: string
    }
  ]
}[]