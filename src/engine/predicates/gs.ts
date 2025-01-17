import { Predicate } from '@draws/engine'

import Team from 'model/team/GSTeam'
import getHalfArrayOfIndex from 'utils/getHalfArrayOfIndex'
import extraConstraints from '../extraConstraints'

const isFrom = (country: string) =>
  (team: Team) =>
    team.country === country

const isFromCountryOf = (team: Team) =>
  isFrom(team.country)

function isTeamEqualTo(team: Team) {
  const { id } = team
  return (otherTeam: Team) =>
    otherTeam.id === id
}

function hasTeam(team: Team) {
  const isEqualToTeam = isTeamEqualTo(team)
  return (group: Team[]) =>
    group.some(isEqualToTeam)
}

const predicate: Predicate<Team> = (
  picked: Team,
  groupIndex: number,
  currentPotIndex: number,
  groups: Team[][],
) => {
  const group = groups[groupIndex]

  const isImpossible = group.length > currentPotIndex
    || group.some(isFromCountryOf(picked))
    || group.some(extraConstraints(picked))
    || picked.pairing && getHalfArrayOfIndex(groups, groupIndex).some(hasTeam(picked.pairing))

  return !isImpossible
}

export default predicate
