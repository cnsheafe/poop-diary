import {ColumnType, Generated, Insertable, Kysely, PostgresDialect, Selectable, Updateable} from "kysely"
import { Pool } from 'pg'

export interface Database {
  journal: JournalTable
  poop: PoopTable
}

interface Table {
  id: Generated<number>;
  created_at: ColumnType<string, string | undefined, never>;
  removed_at: ColumnType<string, string | undefined, never>;
}

export interface JournalTable extends Table {

}

export interface PoopTable extends Table {
  journal_id: number;
  size: 'none' | 'small' | 'medium' | 'large'
  consistency: 'runny' | 'soft' | 'medium' | 'hard'
  date_time_iso: string;
}

export type SelectJournal = Selectable<JournalTable>;
export type NewJournal = Insertable<JournalTable>;
export type JournalUpdate = Updateable<JournalTable>;

export type SelectPoop = Selectable<PoopTable>;
export type NewPoop = Insertable<PoopTable>;
export type PoopUpdate = Updateable<PoopTable>;

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'poopdb',
    host: 'localhost',
    user: 'cloud',
    port: 5434,
    max: 10
  })
})

export const db = new Kysely<Database>({ dialect })

