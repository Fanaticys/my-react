import React from 'react'
import PropTypes from 'prop-types'
import {Column, Table, WindowScroller, AutoSizer} from 'react-virtualized'
import 'react-virtualized/styles.css'

const list = [
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '1 year ago',
  },
  {
    deposit: '0x063dd805dc2a83bdc889851f9af5259fdcf83192bb0cad12c7fe34c89e18fbf1',
    status: 'Staked',
    stake: 100,
    claimed: 20,
    staked: '2 year ago',
  },
]

const TestReactVirtualized = () => {
  return (
    <WindowScroller>
    {({ height, isScrolling, onChildScroll, scrollTop }) => {
      console.log({height})
      return (
        <Table
          autoHeight
          width={500}
          height={height}
          headerHeight={20}
          scrollTop={scrollTop}
          onScroll={onChildScroll}
          rowHeight={60}
          rowCount={list.length}
          rowGetter={({index}) => list[index]}>
          <Column label="Deposit" dataKey="deposit" width={100} />
          <Column label="Status" dataKey="status" width={200} />
          <Column label="Stake" dataKey="stake" width={200} />
          <Column label="Claimed" dataKey="claimed" width={200} />
          <Column label="Staked" dataKey="staked" width={200} />
          <Column label="" dataKey="" width={200} />
        </Table>
      )}}
      </WindowScroller>
  )
}

TestReactVirtualized.propTypes = {}

export default TestReactVirtualized