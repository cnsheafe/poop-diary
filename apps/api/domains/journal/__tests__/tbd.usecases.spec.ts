import {Poop} from "../journal.models"
import {addPoopToJournal, JournalEnv } from "../journal.usecases"

describe("addPoopToJournal", () => {
  it("should return a success result", async () => {
    const env: JournalEnv = {
      journalRepo: {
        addPoop: jest.fn()
      }
    }
    const poop: Poop = {
      size: 'medium',
      consistency: 'medium',
      date_time_iso: '2023-06-25T08:00:00.000Z',
      site_location: null
    }
    const result = await addPoopToJournal(poop, 1)(env)

    expect(result.result_type).toBe('add_poop_to_journal_success')
    expect(env.journalRepo.addPoop).toHaveBeenCalled();
  })
})
