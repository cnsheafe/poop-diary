
interface Poop {

}

interface Journal {

}

interface AddPoopToJournalSuccess {
  result_type: "add_poop_to_journal_success",
  payload: {

  }
}

interface AddPoopToJournalFailure {
  result_type: "add_poop_to_journal_failure",
  error: {
    type: string
    msg: string
  }
}

type AddPoopToJournalResult = AddPoopToJournalSuccess | AddPoopToJournalFailure


export const addPoopToJournal = (poop: Poop, journal: Journal): AddPoopToJournalResult => {
  try {
    return {
      result_type: 'add_poop_to_journal_success',
      payload: {}
    }
  } catch(error) {
    return {
      result_type: 'add_poop_to_journal_failure',
      error: {
        type: 'generic',
        msg: 'there was an error adding poop to journal'
      }
    }

  }
}

