const {expect, test} = require('@oclif/test')

describe('add', () => {
  test
  .stdout()
  .command(['add', '--task="First task"'])
  .it('runs add --task="First task"', ctx => {
    expect(ctx.stdout).to.contain('task: \'First task\'')
  })
})
