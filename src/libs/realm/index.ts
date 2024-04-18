import { createRealmContext } from '@realm/react';
import { Scores } from './schemas/Scores';

export const {
  RealmProvider,
  useRealm,
  useQuery,
  useObject
} = createRealmContext({
  schema: [Scores]
});