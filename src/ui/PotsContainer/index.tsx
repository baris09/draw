import React, { memo } from 'react'
import styled from 'styled-components'
import { difference } from 'lodash'

import Team from 'model/team'
import BasePot from './Pot'
import SplitPot from './SplitPot'

const HEADER_BACKGROUND = 'rgba(0, 0, 0, 0.75)'
const HEADER_COLOR = '#fff'

const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: center;

  & > * {
    flex: 1;
    flex-basis: 22%;
    ${props => props.limitWidth ? 'max-width: 160px' : ''};

    @media (max-width: 999px) {
      max-width: initial;
    }
  }
`

interface Props {
  initialPots: Team[][],
  pots: Team[][],
  selectedTeams: Team[] | null,
  currentPotNum: number,
  split?: boolean,
}

const PotsContainer = ({
  initialPots,
  pots,
  selectedTeams,
  currentPotNum,
  split,
}: Props) => (
  <Root limitWidth={!split}>
    {initialPots && initialPots.map((pot, i) => {
      const Pot = split ? SplitPot : BasePot
      const isCurrent = i === currentPotNum
      const pickedTeams = difference(initialPots[i], pots[i], selectedTeams || [])

      return (
        <Pot
          key={pot[0].id}
          potNum={i}
          isCurrent={isCurrent}
          teams={pot}
          pickedTeams={pickedTeams}
          selectedTeams={selectedTeams}
          background={HEADER_BACKGROUND}
          color={HEADER_COLOR}
        />
      )
    })}
  </Root>
)

export default memo(PotsContainer)
