import {Kysely} from "kysely";
import {Database, db} from ".";

export interface PoopRepo {
}

export class PoopRepoImpl implements PoopRepo {
  private db: Kysely<Database>; 
  public constructor() {
    this.db = db
  }

;
}
