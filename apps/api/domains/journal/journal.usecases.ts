import {JournalRepo} from '../../db/journalRepo'
import {Poop, Journal} from './journal.models'


interface AddPoopToJournalSuccess {
  result_type: "add_poop_to_journal_success",
  payload: Poop
}

interface AddPoopToJournalFailure {
  result_type: "add_poop_to_journal_failure",
  error: {
    type: string
    msg: string
  }
}

type AddPoopToJournalResult = AddPoopToJournalSuccess | AddPoopToJournalFailure
export interface JournalEnv {
  journalRepo: JournalRepo,
}


export const addPoopToJournal = (poop: Poop, journalId: number): (env: JournalEnv) => Promise<AddPoopToJournalResult> => {
  return async ({journalRepo}) => {
    try {
      const newPoop = await journalRepo.addPoop(poop, journalId)

      return {
        result_type: 'add_poop_to_journal_success',
        payload: newPoop
      }
    } catch (error) {
      return {
        result_type: 'add_poop_to_journal_failure',
        error: {
          type: 'generic',
          msg: 'there was an error adding poop to journal'
        }
      }

    }
  }
}

