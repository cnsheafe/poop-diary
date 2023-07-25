import {addPoopToJournal} from "../tbd.usecases"

describe("addPoopToJournal", () => {
  it("should return a success result", () => {
    const result = addPoopToJournal({}, {})

    expect(result.result_type).toBe('add_poop_to_journal_success')
  })
})
