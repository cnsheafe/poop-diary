import {Kysely} from "kysely";
import {Database, db, NewPoop, SelectPoop} from ".";
import {Poop} from "../domains/journal/journal.models";

export interface JournalRepo {
  addPoop: (poop: Poop, journalId: number) => Promise<Poop>;
}


export class JournalRepoImpl implements JournalRepo {
  private db: Kysely<Database>; 
  public constructor() {
    this.db = db
  }

  public async addPoop(poop: Poop, journalId: number): Promise<Poop> {
    const poopDb: NewPoop = {
      consistency: poop.consistency,
      size: poop.size,
      date_time_iso: poop.date_time_iso,
      journal_id: journalId,
    }

    const result = await this.db.insertInto('poop')
      .values(poopDb)
      .returningAll()
      .executeTakeFirstOrThrow()
      
    return {
      consistency: result.consistency,
      date_time_iso: result.date_time_iso,
      site_location: null,
      size: result.size,
    }
  }
}
