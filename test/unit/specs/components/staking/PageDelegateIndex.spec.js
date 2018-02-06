import setup from '../../../helpers/vuex-setup'
import PageDelegateIndex from 'renderer/components/staking/PageDelegateIndex'

describe('PageDelegateIndex', () => {
  let wrapper, store, router
  let {mount} = setup()

  beforeEach(() => {
    let instance = mount(PageDelegateIndex)
    wrapper = instance.wrapper
    store = instance.store
    router = instance.router

    store.commit('addDelegate', {
      pub_key: {
        type: 'ed25519',
        data: 'pubkeyX'
      },
      voting_power: 10000,
      shares: 5000,
      description: {
        description: 'descriptionX',
        moniker: 'monikerX',
        country: 'US'
      }
    })
    router.push('/delegates/pubkeyX')
  })

  it('has the expected html structure', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  it('should add/remove delegate to/from cart', () => {
    expect(wrapper.vm.inCart).toBe(false)
    wrapper.vm.add(wrapper.vm.delegate)
    expect(wrapper.vm.inCart).toBe(true)
    wrapper.vm.rm('pubkeyX')
    expect(wrapper.vm.inCart).toBe(false)
  })

  /*
  it('should show indicate validator/candidate', () => {
    expect(wrapper.find('#delegate-country .ni-li-dd').text().trim())
      .toEqual('United States')
  })
  */

  it('should show the correct country name', () => {
    expect(wrapper.find('#delegate-country .ni-li-dd').text().trim())
      .toEqual('United States')
  })
})
