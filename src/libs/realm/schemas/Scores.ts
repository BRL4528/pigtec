import { Realm } from '@realm/react';

interface GenerateProps {
 quantity: number;
 weight: string;
 status: boolean;
}

export class Scores extends Realm.Object<Scores> {
  id!: string;
  quantity!: number;
  weight!: string;
  file!: string;
  status!: boolean;
  producer_id_sender!: string;
  type!: string;
  nf!: string;
  farm_id_sender!: string;
  productor_id_received!: string;
  farm_id_received!: string;
  producer_id_internal!: string;
  farm_id_internal!: string;
  file_url!: string;
  name!: string;
  lote!: string;
  created_at!: string;
  updated_at!: string;
  start_date!: string;
  end_date!: string;
  static generate({ quantity, status, weight }: GenerateProps) {
    return {
     id: new Realm.BSON.UUID(),
     created_at: new Date(),
     updated_at: new Date(),
     start_date: new Date(),
     quantity, 
     status, 
     weight
    }
  } 

  static schema = {
    name: 'Scores',
    primaryKey: 'id',

    properties: {
      id: 'uuid',
      quantity: 'number',
      weight:  'string',
      file: 'string',
      status: 'boolean',
      producer_id_sender: 'uuid',
      type: 'string',
      nf: 'string',
      farm_id_sender: 'uuid',
      productor_id_received: 'uuid',
      farm_id_received: 'uuid',
      producer_id_internal: 'uuid',
      farm_id_internal: 'uuid',
      file_url: 'string',
      name: 'string',
      lote: 'string',
      created_at: 'date',
      updated_at: 'date',
      start_date: 'date',
      end_date: 'date',
    }
  }
}