import { useCallback } from 'react'
import Select from './Select'
import Datetime from './Datetime'
import { object } from 'prop-types'
import usePlaylist from '../contexts/PlaylistContext'
import { ID_LOCALE, ID_COUNTRY, ID_TIMESTAMP } from './constantsComponents'

const FieldsFilter = ({ filter }) => {
  const { setFilterChoices } = usePlaylist()

  const handleFilters = useCallback(
    (filterName, value) => {
      setFilterChoices({ [filterName]: value })
    },
    [setFilterChoices]
  )

  switch (filter.id) {
    case ID_LOCALE:
      return (
        <Select
          id={filter.id}
          onChange={handleFilters}
          options={filter.values}
          text={filter.name}
        />
      )
    case ID_COUNTRY:
      return (
        <Select
          id={filter.id}
          onChange={handleFilters}
          options={filter.values}
          text={filter.name}
        />
      )
    case ID_TIMESTAMP:
      return (
        <Datetime id={filter.id} onChange={handleFilters} text={filter.name} />
      )
    default:
      return null
  }
}

FieldsFilter.propTypes = {
  filter: object.isRequired
}

export default FieldsFilter