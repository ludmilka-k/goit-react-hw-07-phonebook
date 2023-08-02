import {useDispatch, useSelector} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {filterByName, getFilter} from '../../redux';
import {FilterForm, Label, Input} from './Filter.styled'

const filterInputId = nanoid();
export const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();



	const onFilterChange = (event) => {
		const stringifyValue = event.target.value.toLowerCase();
		dispatch(filterByName(stringifyValue));
	};
	return (
		<>
			<FilterForm >
				<Label>
					Find contact by name
					<Input
						type="text"
						value={filter}
						onChange={onFilterChange}
						placeholder="Search by name"
						id={filterInputId}
					/>
				</Label>
			</FilterForm>
		</>
	)
}

