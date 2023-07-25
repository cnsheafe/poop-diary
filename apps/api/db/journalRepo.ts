import {Poop} from "../domains/journal/journal.models";

export interface JournalRepo {
  addPoop: (args: { journalId: number, poop: Poop }) => Promise<void>; 
}
